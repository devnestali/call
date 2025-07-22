import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { year, month } = req.query

  if (!year || !month) {
    return res.status(400).json({ message: 'Year or not was not specified.' })
  }

  const monthTransformed = String(month).padStart(2, '0')

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not provided.' })
  }

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  const blockedWeekDays = Array.from({ length: 7 })
    .map((_, i) => i)
    .filter((weekDay) => {
      return !availableWeekDays.some(
        (availableWeekDay) => availableWeekDay.week_day === weekDay,
      )
    })

  const blockedDatesRaw: Array<{ date: number }> = await prisma.$queryRaw`
     SELECT
      (EXTRACT(DAY FROM S.DATE) + 0.0) AS date,
      COUNT(S.date) AS amount,
      ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60) AS size

    FROM schedulings S

    LEFT JOIN user_time_intervals UTI
      ON UTI.week_day = WEEKDAY(DATE_ADD(S.date, INTERVAL 1 DAY))

    WHERE S.user_id = ${user.id}
      AND DATE_FORMAT(S.date, "%Y-%m") = ${`${year}-${monthTransformed}`}

    GROUP BY (EXTRACT(DAY FROM S.DATE) + 0.0),
      ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)

    HAVING amount >= size
  `

  const blockedDates = blockedDatesRaw.map((item) => Number(item.date))

  return res.json({ blockedWeekDays, blockedDates })
}

import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  CalendarBody,
  CalendarDay,
} from './styles'
import { getWeekDays } from '@/utils/get-week-days'
import { Tooltip } from '@devnestali-call-ui/react'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Julio <span>2025</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Tooltip date="1 de Julio" disponibility="Disponíble">
                <CalendarDay>1</CalendarDay>
              </Tooltip>
            </td>
            <td>
              <Tooltip date="1 de Julio" disponibility="Indisponíble">
                <CalendarDay disabled>2</CalendarDay>
              </Tooltip>
            </td>
            <td>
              <Tooltip date="1 de Julio" disponibility="Indisponíble">
                <CalendarDay>3</CalendarDay>
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}

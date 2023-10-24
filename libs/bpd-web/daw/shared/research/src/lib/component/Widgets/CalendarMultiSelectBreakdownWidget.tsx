import { MultiSelectBreakdown, withBreakdown } from '@bpd/daw/shared/core'

const CalendarMultiSelectBreakdownWidget = withBreakdown({
  component: MultiSelectBreakdown,
  breakDnKey: 'projects[].calendarBreakdowns.calendar',
  multiSelectLabel: 'Multiple',
  minThreshold: 1,
})

export default CalendarMultiSelectBreakdownWidget

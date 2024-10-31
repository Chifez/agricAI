type ScheduleEventType =
  | 'best_planting'
  | 'late_planting'
  | 'best_harvesting'
  | 'late_harvesting';

interface ScheduleEvent {
  type: ScheduleEventType;
  date: string;
}

export interface ScheduleData {
  planting_schedule: ScheduleEvent[];
  harvesting_schedule: ScheduleEvent[];
}

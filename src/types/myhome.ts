export type ChartType = '목표 달성 수' | '사용시간';

export interface GoalDetail {
  id: string;
  title: string;
  completed: boolean;
}

export interface DailyGoal {
  date: string;
  goals: GoalDetail[];
  amount: number;
}

export interface TimeItem {
  date: string;
  duration: number;
}

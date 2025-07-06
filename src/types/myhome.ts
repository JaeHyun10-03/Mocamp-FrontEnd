export type ChartType = '목표 달성 수' | '사용시간';

export interface GoalDetail {
  goalId: number;
  content: string;
  isCompleted: boolean;
}

export interface DailyGoal {
  date: string;
  userGoalList: GoalDetail[];
  amount: number;
}

export interface TimeItem {
  date: string;
  duration: number;
}

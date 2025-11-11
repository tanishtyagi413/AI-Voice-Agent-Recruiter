import { BriefcaseBusinessIcon, Calendar, Code2Icon, LayoutDashboard, List, Puzzle, Settings, User2Icon, WalletCards } from "lucide-react";

export const sideBarOptions = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path : "/dashboard",
  },
  {
    name: "Scheduled Interview",
    icon: Calendar,
    path : "/scheduled-nterview",
  },
  {
    name: "All Interview",
    icon: List,
    path : "/all-nterview",
  },
  {
    name: "Billing",
    icon: WalletCards,
    path : "/billing",
  },
  {
    name: "Settings",
    icon: Settings,
    path : "/settings",
  },
]

export const InterviewTypes = [
  {
  title: 'Techinical Interview',
  icon : Code2Icon
  },
  {
    title: 'Behavioral Interview',
    icon: User2Icon
  },
  {
    title: 'Expreience Interview',
    icon: BriefcaseBusinessIcon
  },
  {
    title: 'Problem Solving Interview',
    icon: Puzzle
  },
  {
    title:'Leadership Interview',
    icon:Puzzle
  },
]

export const QUESTION_PROMPT =`You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Position:{{jobPosition}}
Job Description: {{jobDescription}}
Interview Duration: {{interviewDuration}}
Interview Type: {{interviewType}}
Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{interviewType}} interview.
Format your response in JSON format with array list of questions.
format: interview Questions=[{
question:" ",
type: 'Technical/Behavioral/Experince/Problem Solving/Leaseship'},{
...
}]
remove "\n,", "json" from the response.
The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobPosition}} role.`
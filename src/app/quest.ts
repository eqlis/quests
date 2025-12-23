import { Task } from "./task";

export interface Quest {
    id: number;
    title: string;
    description: string;
    image: string;
    instructions: string;
    tasks: Task[];
}

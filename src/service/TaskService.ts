import ApiClient from "./ApiClient";

export type task = {
    id: number;
    title: string;
    description: string;
    img: string;
    author: string;
  };

class TaskService{
    GetTasks(url: string){
        return ApiClient.get(url)
    }
}

export default new TaskService;
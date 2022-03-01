import { HttpService } from "./http";
import { User } from '../interfaces/application';

class UsersController {

  async getUsers(): Promise<User[]> {

    let response = await HttpService.get('users.json?key=074f9250');

    return await response.json();
  }
}
export const UsersService = new UsersController();
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserPipe'
})
export class SearchUserPipe implements PipeTransform {
  transform(users: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return users.filter(function (user: any) {
        return user.user_name.toLowerCase().indexOf(input) > -1
          || user.gender.toLowerCase().indexOf(input) > -1
          || user.region.toLowerCase().indexOf(input) > -1;
      });
    }
    return users;
  }
}

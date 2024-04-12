import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  unsubscribe$ = new Subject<void>();

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.userListService.getUserList().pipe(takeUntil(this.unsubscribe$)).subscribe((users: User[]) => {
      this.users$.next(users);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

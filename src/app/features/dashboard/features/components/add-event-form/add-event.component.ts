import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EventModel} from '../../../../../modules/core/api/models/event.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../modules/core/core.state';
import {actionGetEvent} from '../../store/actions/event.actions';
import {log} from 'util';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Output() private save = new EventEmitter<any>();
  @Input() public isSaving = false;
  public submitted = false;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', [Validators.required]],
    });

  }

  emitSave(model, isValid: boolean) {
    this.submitted = true;
    if (isValid) {
      this.save.emit(model);
    }
  }
}

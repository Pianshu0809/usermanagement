import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,Validators,ReactiveFormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Userinfomation } from '../service/userinfomation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileinformation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profileinformation.html',
  styleUrls: ['./profileinformation.css'],
})
export class Profileinformation implements OnInit {
  profileForm!: FormGroup;
  users: any[] =[]

  constructor(private fb: FormBuilder, private userService: Userinfomation, private render:Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      profiles: this.fb.array([this.createProfileGroup()]),
    });

    const savedData=localStorage.getItem('profiles')
    if(savedData)
      this.users=JSON.parse(savedData)
  }

  get profileFormArray(): FormArray {
    return this.profileForm.get('profiles') as FormArray;
  }

  get profileFormGroups(): FormGroup[] {
    return this.profileFormArray.controls as FormGroup[];
  }

  getSkills(group: FormGroup): FormArray {
    return group.get('skills') as FormArray;
  }

  createProfileGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      previewUrl: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      skills: this.fb.array([this.fb.control('')]),
    });
  }

  addFormGroup(): void {
    this.profileFormArray.push(this.createProfileGroup());
  }

  addSkill(profileIndex: number): void {
    const skillsArray = this.getSkills(this.profileFormGroups[profileIndex]);
    skillsArray.push(this.fb.control('')); 
  }

  removeSkill(profileIndex: number, skillIndex: number): void {
    const skillsArray = this.getSkills(this.profileFormGroups[profileIndex]);
    skillsArray.removeAt(skillIndex);
  }

  onFileSelected(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileFormArray.at(index).patchValue({
          previewUrl: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  onSaveAll(): void {
  if (this.profileForm.valid) {
    const newProfiles = this.profileForm.value.profiles;

    const existingData = localStorage.getItem('profiles');
    let profiles = existingData ? JSON.parse(existingData) : [];

    profiles = [...profiles, ...newProfiles];

    localStorage.setItem('profiles', JSON.stringify(profiles));
    this.users = profiles;

    alert('✅ Profiles added successfully!');
    console.log('Saved data:', profiles);
  } else {
    alert('⚠️ Please fill all required fields before saving.');
    this.profileForm.markAllAsTouched();
  }
  
}

onLogout(){
    this.render.navigate(['/login']);

  }



}































































// profileForm = new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
  //   lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  //   ]),
  //   phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
  //   userImage: new FormControl<string | null>(null),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   }),
  //   skills: new FormArray([
  //     new FormControl(null),
  //     new FormControl(null),
  //     new FormControl(null)
  //   ])
  // });

  // previewUrl: string | ArrayBuffer | null = null;
  // users: any[] = [];

  // constructor(private userInfoService: Userinfomation) {}

  // ngOnInit() {
  //   const savedData = localStorage.getItem('profileData');
  //   if (savedData) {
  //     this.users = JSON.parse(savedData);
  //   }
  // }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.previewUrl = reader.result as string;
  //       this.profileForm.patchValue({ userImage: this.previewUrl });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // get skills() {
  //   return this.profileForm.get('skills') as FormArray;
  // }

  // onSubmit() {
  //   if (this.profileForm.valid) {
  //     const address = this.profileForm.get('address')?.value;
  //     const formData = {
  //       firstName: this.profileForm.get('firstName')?.value,
  //       lastName: this.profileForm.get('lastName')?.value,
  //       email: this.profileForm.get('email')?.value,
  //       phone: this.profileForm.get('phone')?.value,
  //       userImage: this.previewUrl,
  //       street: address?.street,
  //       city: address?.city,
  //       state: address?.state,
  //       zip: address?.zip,
  //       skills: this.skills.value 
  //     };

  //     // Save in service
  //     this.userInfoService.setUser(formData);

  //     // Add to array and save in localStorage
  //     this.users.push(formData);
  //     localStorage.setItem('profileData', JSON.stringify(this.users));

  //     console.log('Data saved in service:', this.userInfoService.getUser());
  //     console.log('All data in localStorage:', this.users);

  //     // Reset form after submission
  //     this.profileForm.reset();
  //     this.previewUrl = null;
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
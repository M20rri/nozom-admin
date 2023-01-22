export interface ICVGrid {
  id: number;
  name: string;
  personal_Information_Id: number;
  experience_Information_Id: number;
}


export class CV {
  id: number = 0;
  name: string = '';
  personal_Information_Id: number = 0;
  experience_Information_Id: number = 0;
  experience_Information: ExperienceInformation = new ExperienceInformation();
  personal_Information: PersonalInformation = new PersonalInformation();
}

export class ExperienceInformation {
  id: number = 0;
  companyName: string = '';
  city: string = '';
  companyField: string = '';
}

export class PersonalInformation {
  id: number = 0;
  fullname: string = '';
  cityname: string = '';
  email: string = '';
  mobile: string = '';
}

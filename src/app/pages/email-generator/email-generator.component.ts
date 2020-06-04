import { Component, OnInit } from '@angular/core';
import { PolicyService } from '@services/policy.service';

import { Official } from '../../models/official';
import { Sender } from '../../models/sender';
import { Location } from '../../models/location';
import { EmailService } from '@services/email.service';

@Component({
  selector: 'app-email-generator',
  templateUrl: './email-generator.component.html',
  styleUrls: ['./email-generator.component.css']
})
export class EmailGeneratorComponent implements OnInit {

  
  locations: any[] = []
  officials: Official[] = []

  official: Official;
  location: Location;

  sender: Sender = {
    name: '',
    email: ''
  }

  email: string;
  formattedEmail: string;
  policy: any;

  constructor(private policyService: PolicyService, private emailService: EmailService) { }

  ngOnInit() {
    this.policyService.getLocations().subscribe(locations => {
      this.locations = locations;
      this.location = this.locations[0];
      this.updateLocation();
    })
  }

  onNameChange(name){
    this.sender.name = name;
    this.updateEmail();
  }

  onLocationChage($event){
    this.updateLocation();
  }

  onOfficialChage($event){
    this.updateEmail();
  }

  private updateLocation(){
    this.policyService.getOfficialsByLocation(this.location).subscribe(res => {
      let { officials, policy } = res;
      this.officials = officials;
      this.official = officials[0];
      this.policy = policy;
      this.updateEmail();
    })
  }

  private updateEmail(){
    this.emailService.getEmail(this.location, this.official, this.sender, this.policy).subscribe(email => {
      this.formattedEmail = email.replace(/[\r\n]+/g, "%0D%0A");
      this.email = email
    })
  }

  copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

}

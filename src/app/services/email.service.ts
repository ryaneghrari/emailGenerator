import { Injectable } from '@angular/core';

import { Official } from '../models/official';
import { Sender } from '../models/sender';
import { Location } from '../models/location';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getEmail(location: Location, official: Official, sender: Sender, policy: any) {
    let date = new Date().toLocaleDateString();

    return of(`Dear ${official.name},

I write to you as of ${date}.  NY has enacted 4/8 of the 8cantwait.org policies that have proven to reduce police violence by 72%. 

${location.city} (${location.state}):

[${policy.requires_deescalation > 0 ? 'x': ' '}] Requires De-escalation 
[${policy.bans_chokeholds_and_strangleholds > 0 ? 'x' : ' '}] Bans Chokeholds and Strangleholds
[${policy.duty_to_intervene > 0 ? 'x' : ' '}] Duty to Intervene 
[${policy.requires_warning_before_shooting > 0 ? 'x' : ' '}] Requires Warning Before Shooting 
[${policy.restricts_shooting_at_moving_vehicles > 0 ? 'x' : ' '}] Ban Shooting at Moving Vehicles 
[${policy.requires_comprehensive_reporting > 0 ? 'x' : ' '}] Requires Comprehensive Reporting 
[${policy.requires_exhaust_other_means_before_shooting > 0 ? 'x' : ' '}] Requires Exhausting Other Means Before Shooting 
[${policy.has_use_of_force_continuum > 0 ? 'x' : ' '}] Has Use of Force Continuum 

I ${sender.name} ask you to please consider these policy changes immediately. Thank you for your service. 

Sincerely,
${sender.name}
`);
  }
}

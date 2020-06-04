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

  private getNumEnacted(policy){
    let requires_deescalation = policy.requires_deescalation > 0 ? 1 : 0;
    let bans_chokeholds_and_strangleholds = policy.bans_chokeholds_and_strangleholds > 0 ? 1 : 0;
    let duty_to_intervene = policy.duty_to_intervene > 0 ? 1 : 0;
    let requires_warning_before_shooting = policy.requires_warning_before_shooting > 0 ? 1 : 0;
    let restricts_shooting_at_moving_vehicles = policy.restricts_shooting_at_moving_vehicles > 0 ? 1 : 0;
    let requires_comprehensive_reporting = policy.requires_comprehensive_reporting > 0 ? 1 : 0;
    let requires_exhaust_other_means_before_shooting = policy.requires_exhaust_other_means_before_shooting > 0 ? 1 : 0;
    let has_use_of_force_continuum = policy.has_use_of_force_continuum > 0 ? 1 : 0;
    
    return (requires_deescalation +
    bans_chokeholds_and_strangleholds +
    duty_to_intervene +
    requires_warning_before_shooting +
    restricts_shooting_at_moving_vehicles +
    requires_comprehensive_reporting +
    requires_exhaust_other_means_before_shooting +
    has_use_of_force_continuum); 
  }

  getEmail(location: Location, official: Official, sender: Sender, policy: any) {
    let date = new Date().toLocaleDateString();

    return of(`Dear ${official.name},

I write to you as of ${date}.  ${location.state} has enacted ${this.getNumEnacted(policy)}/8 of the 8cantwait.org policies that have proven to reduce police violence by 72%. 

${location.city} (${location.state}):

${policy.requires_deescalation > 0 ? '✅' : '🚫'} Requires De-escalation 
${policy.bans_chokeholds_and_strangleholds > 0 ? '✅' : '🚫'} Bans Chokeholds and Strangleholds
${policy.duty_to_intervene > 0 ? '✅' : '🚫'} Duty to Intervene 
${policy.requires_warning_before_shooting > 0 ? '✅' : '🚫'} Requires Warning Before Shooting 
${policy.restricts_shooting_at_moving_vehicles > 0 ? '✅' : '🚫'} Ban Shooting at Moving Vehicles 
${policy.requires_comprehensive_reporting > 0 ? '✅' : '🚫'} Requires Comprehensive Reporting 
${policy.requires_exhaust_other_means_before_shooting > 0 ? '✅' : '🚫'} Requires Exhausting Other Means Before Shooting 
${policy.has_use_of_force_continuum > 0 ? '✅' : '🚫'} Has Use of Force Continuum 

I ${sender.name} ask you to please consider these remaining policy changes immediately. Thank you for your service. 

Sincerely,
${sender.name}
`);
  }
}

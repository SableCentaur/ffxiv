# INFO
Hi! Thanks for using my AM. Performance will be best on v1.1.7.1 of Triggernometry.
If you have any issues with the markers, make sure to read the instructions and information below. In the case that the instructions
don't solve your issue or answer your question, head to the P5 Automarkers thread in the Triggernometry discord and let me know
what's going on. Please do not DM me without asking. If you can provide Trig logs, that would be best; make sure to grab them
before you close ACT as they cannot be retrieved afterward. If you search for "Dynamis" before copying the log, that should filter
out any other triggers you're using.
Happy progging!

<p style="text-align:right;">--Sable</p>

<b>Setup</b> <br />
   Telesto is *required* for these triggers, to build the party list and to send the mark commands to the game.
   Telesto will automatically pull the party list order at the end of p4, so do not change your party list order between p4 and p6.
   You can also use "/e \_reset" to manually trigger telesto to rebuild the party list. <br />
   https://github.com/paissaheavyindustries/Telesto
   
   I recommend adding the repo as a <a href=https://github.com/paissaheavyindustries/Triggernometry/tree/master/Repositories#how-to-use-repositories>remote repository</a> to ensure you automatically get any bug-fixing updates. The default settings are all fine. Use the following url for the address: <br />
   https://raw.githubusercontent.com/SableCentaur/ffxiv/master/Triggernometry/XMLs/TOP%20Dynamis%20AutoMarker.xml<br/>
   ![image](https://user-images.githubusercontent.com/20386522/224921222-59723f69-e34a-4300-b5e5-0a7a71440515.png)
   
   If you desire any customization, you will need to copy the setup triggers to your local triggers. Ensure that the remote copy is disabled, and the local copy is enabled. If the default settings described below work for you, no copying is necessary, and you can leave the remote copy enabled.<br />
  ![image](https://user-images.githubusercontent.com/20386522/226791656-4995fa4d-5fc1-430b-a291-23920566697b.png)

<b>Default Configuration</b> <br />
Markers: <br />
   - TRIANGLE - Near World<br />
   - PLUS - Far World<br />
   - Attack1&2 - Mechanic (fists, monitors, tethers)<br />
   - Ignore1&2 - Far Bait<br />
   - Bind1&2 - Near Bait<br />
Markers will self clear once the Near/Far World debuffs resolve, or upon party wipe.

Priority: <br />
The default priority is 45671823. Players 4 and 5 in the party list will never get near baits, and players 2 and 3 will never get far baits. Players close to the top of the priority list will get marked for mechanics (fist tethers, monitors) first if they meet dynnamis requirements, and players closer to the top of the list are more likely to be assigned far baits. <br />

Delay: No delay is set by default for both Sigma and Omega; markers will go out shortly after the Hello World buffs are assigned in Sigma and Omega 1. <br />
Multi-Marker Delay: No delay is set by default between individual markers; all the marks will go out at once instead of being delayed a short time.

<b>Cheatsheets</b> <br />
Sigma - attack1&2 and ignore1 always go to the female, everyone else go across from the female.
   All players follow the rotating line to get to their spots (if it's CCW, positions are flipped E/W) <br />
   <img src="https://raw.githubusercontent.com/SableCentaur/ffxiv/master/Triggernometry/XMLs/TOP%20Dynamis%20AM%20Cheatsheets/sigma-1.png" width=500 height=500>
   <img src="https://raw.githubusercontent.com/SableCentaur/ffxiv/master/Triggernometry/XMLs/TOP%20Dynamis%20AM%20Cheatsheets/sigma-2alt.png" width=500 height=500>
   
Omega - treat the monitor side and beetle as north. Be careful to not get clipped by the monitor and blaster circles. <br />
   <img src="https://raw.githubusercontent.com/SableCentaur/ffxiv/master/Triggernometry/XMLs/TOP%20Dynamis%20AM%20Cheatsheets/omega-1.png" width=500 height=500>
   <img src="https://raw.githubusercontent.com/SableCentaur/ffxiv/master/Triggernometry/XMLs/TOP%20Dynamis%20AM%20Cheatsheets/omega-2.png" width=500 height=500>

For both Trios, Near/Far World should stand on the 4th line in from the edge of the arena to ensure the outside ring is safe for
baits, and prevent near/far world from being too close together. Mechanic players should always stand relative north of the
intercardinal to prevent clipping people with mechanics.

# Customization
If you only want auto markers for a specific trio, disable the trigger(s) labeled with the one(s) you do not want.<br />
![image](https://user-images.githubusercontent.com/20386522/224918730-095b12c4-52c3-450d-ac20-0d8db797510c.png)

The following customizations are provided via the two triggers in the <i>copy to local</i> folder. Make sure the local copies are enabled, and the remote ones are disabled. <br />
![image](https://user-images.githubusercontent.com/20386522/224922715-3ac02411-f8a9-4f77-a5bc-802940b94b56.png)

<b>Priority</b> <br />
The order of the Priority list will dictate which players will be assigned mechanics first, if possible. Customize the priority by changing the order of actions in the local Priority & Delays trigger.

![image](https://user-images.githubusercontent.com/20386522/224921757-c0e2e966-a1a3-4e2a-852f-66e041abab65.png)

Players closer to the top of the list will have higher priority to be assigned mechanic positions in if they meet dynamis requirements
(Sigma fists [1] & Omega monitor baits [2] assuming 2nd in line near/far world does not have [2] dynamis).
The two players at the top of the list will never get near baits, and the two players at the end of the list will never get far baits.
Once Near/Far World and Mechanic players are eliminated from the priority list, bait assignments for the remaining 4 players are
done in the following order: Far 1, Far 2, Near 2, Near 1
   
<b>Delays</b> <br />
The Sigma and/or Omega part 1 markers can be delayed to prevent visual clutter during playstation and M/F+Wave Cannons. Enable the delay actions in your local Priority & Delays trigger. The suggested values are 26 for sigma (markers will appear during towers knockback) and 17 for omega (markers will appear during the second aoe dodge), but you can edit them if you would like longer/shorter delays. The delay for omega will only affect the first half of omega; markers for the second part will always go out once the debuffs for part 1 have resolved.<br />
   ***Added delays will impact the test triggers too, so you'll have to remember to be patient if you use the test triggers*** <br />
   ![image](https://user-images.githubusercontent.com/20386522/224922504-82bcd3ae-be26-418e-aeec-a2ed69ab2928.png)

It is also possible to add a small delay between marks to add plausible deniability. IF YOU ARE NOT COMFORTABLE WITH PLAYERS IN YOUR PARTY KNOWING YOU ARE USING AUTOMARKERS, I DO NOT RECOMMEND YOU USE AUTOMARKERS AT ALL. No amount of delay in markers is enough to guarantee someone will not report you. Enable the Multi Marker delay in the Priority & Delays trigger. The default value is 1000 ms, and can be adjusted as desired. Delay in marks will have a preset variability within +/- 100 ms. I don't recommend setting this higher than 1000 ms since marks for Omega 2 only go out once Omega 1 has resolved. <br />
![image](https://user-images.githubusercontent.com/20386522/224923717-af4c1e08-284d-40e6-aa5b-96789f6766f7.png)
   
<b>Markers</b> <br />
To change the marker configuration you can customize the Markers trigger in the <i>copy to local</i> folder. If you change these, make sure they're spelled correctly, and do not put a space between the marker type and the number (eg. "attack1" is correct, "attack 1" is not). See <a href=https://na.finalfantasyxiv.com/lodestone/playguide/db/text_command/4348eed9de5/>Eorzea Database</a> for marker options.
![image](https://user-images.githubusercontent.com/20386522/224917688-49dee4cf-b2e0-426b-9af4-c9bb8c125855.png)

# Test Triggers
To test, you can go into any instance of with a party of 8. Then, use one of the following commands: <br />
   /e \_test delta
   /e \_test sigma
   /e \_test omega
   
Please note that the test triggers will take a few seconds to mark. The omega trigger also simulates both parts of the mechanic (monitors and tethers), so it will take another 35 seconds to mark the second set. The markers will self clear once the simulation is complete (when the near/far world debuffs would resolve for each trio). If you fire another test trigger before it completes, it will interrupt them and clear the marks so they should not interfere with each other. The test triggers are preset scenarios which means you'll get the same variation every time, and cannot effectively be used to practice. <br />
****If you add marker delays in the Priority & Delays configuration trigger, the test triggers will also be affected****

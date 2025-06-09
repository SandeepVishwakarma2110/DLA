import React from 'react';
import './KYNpage.css';

const CrimeTable = () => {
  const data = [
    { crime: 'Theft', ipcSection: '378, 379', sectionTitle: '378:Dishonestly taking any movable property without the owners consent. 379:Punishment for Theft - Specifies punishment for theft ', description: 'Taking another person’s property, like money or valuables, without permission.', punishment: 'Imprisonment up to 3 years, or fine, or both' },   
    { crime: 'Robbery', ipcSection: '390, 392', sectionTitle: '390:Robbery - Defines robbery as theft accompanied by violence or fear.392:Punishment for Robbery - Outlines penalties for robbery. ', description: 'Forcefully taking property from someone, often through threat or violence, intending to deprive them of their belongings.', punishment: 'Rigorous imprisonment up to 10 years, and fine' },
    { crime: 'Murder', ipcSection: '300, 302', sectionTitle: '300:Murder - Defines the elements constituting murder. 302:Punishment for Murder - Specifies punishment for murder.  ', description: 'Causing the death of a person deliberately, with intent to kill or cause fatal harm.', punishment: 'Death penalty or life imprisonment, and fine.' },
    { crime: 'Culpable Homicide (not amounting to murder)', ipcSection: '299,304', sectionTitle: '299: Culpable Homicide - Defines culpable homicide as causing death without the intention of murder.  304: Punishment for Culpable Homicide Not Amounting to Murder - Sets penalties for culpable homicide when murder is not intended. ', description: 'Killing someone without specific intent to cause death, but with awareness of potentially fatal consequences.', punishment: 'Imprisonment up to 10 years or life, and fine' },
    { crime: 'Kidnapping', ipcSection: '359,363', sectionTitle: '359: Kidnapping - Classifies kidnapping into two types: from India or from lawful guardianship. 363: Punishment for Kidnapping - Specifies penalties for kidnapping. ', description: 'Taking or enticing a minor or person from lawful custody without consent.', punishment: 'Imprisonment up to 7 years, and fine' },
    { crime: 'Rape', ipcSection: '375,376', sectionTitle: '375: Rape - Defines rape as non-consensual sexual intercourse under various circumstances. 376: Punishment for Rape - Specifies penalties for rape. ', description: 'Sexual intercourse without consent or by force, causing physical or emotional harm to the victim.', punishment: 'Minimum 10 years to life imprisonment, and fine' },
    { crime: 'Domestic Violence', ipcSection: '498A', sectionTitle: '498A: Cruelty by Husband or Relatives of Husband - Defines cruelty towards a woman by her husband or his relatives.', description: 'Physical or mental harm to a wife, including harassment or torture by husband or in-laws.', punishment: 'Imprisonment up to 3 years, and fine' },   
    { crime: 'Harassment', ipcSection: '354', sectionTitle: 'Punishment for Harassment', description: 'Assault or criminal force on a woman', punishment: 'Up to 5 years imprisonment' },
  
  
  ];

  return (
    <div>
      <h1>Crime and Punishment Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Crime</th>
            <th>IPC Section</th>
            <th>Section Title</th>
            <th>Crime Description</th>
            <th>Punishment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.crime}</td>
              <td>{row.ipcSection}</td>
              <td>{row.sectionTitle}</td>
              <td>{row.description}</td>
              <td>{row.punishment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrimeTable;

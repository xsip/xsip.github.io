export const projects: {
  client: string;
  role: string;
  description: string;
  tasks?: string;
  technologies: string;
}[] = [{
  'client': 'Elektrogeräte Unternehmen',
  'role': 'Senior Fullstack Developer',
  'description': 'Implementierungen, architektur und testung von Frontend Applikationen sowie GraphQL Api',
  tasks: `<ul>
  <li>Implementierung und Testung von Frontend Komponenten</li>
  <li>Implementierung und Testung einer GraphQL Schnittstelle</li>
  <li>Neuentwicklung von features, Bug fixing, code review</li>
</ul>`,
  'technologies': 'Nx, Next.js, Apollo Client, Jest, Cypress, GraphQL, NestJS, Typescript, Docker, Gitlab CI, storybook.js, tailwind.css, Swagger, Open API Generator'
}, {
  'client': 'Gesundheitstechnik Unternehmmen',
  'role': 'Senior Frontend Developer',
  tasks: `<ul>
  <li>Bugfixing</li>
</ul>`,
  'description': 'Angular applikation zum anzeigen von Medizinischen daten mit nutzung interner UI Library',
  'technologies': 'Angular, RXJS, OrbisUI, Dicom, Github Actions'
},{
  'client': 'Juristisches unternehmen',
  'role': 'Senior Frontend Developer',
  tasks: `<ul>
  <li>Bug fixing</li>
  <li>Entwicklung neuer Features</li>
</ul>`,
  'description': 'Word plugin zum suchen von Juristischen texten',
  'technologies': 'Angular, Word JavaScript API'
}, {
  'client': 'Elektromotor Unternehmen',
  'role': 'Senior Frontend Developer',
  tasks: `<ul>
  <li>Entwicklung neuer Features</li>
</ul>`,
  'description': 'Plattform zur Verwaltung und Erstellung von Wartungsverträgen für Motoren',
  'technologies': 'Angular, Angular Material, RXJS, NgRx, Redux, TypeScript, JavaScript, KendoUi, Open API, nx monorepo'
}, {
  'client': 'Bahn Unternehmen',
  'role': 'Frontend Developer',
  tasks: `<ul>
  <li>Entwicklung neuer Features im B2B bereich.</li>
</ul>`,
  'description': 'Entwicklung des Frontends im b2b Bereich. Endkunden management.',
  'technologies': 'Angular 8, AngularJS, NodeJS, Mocha, Typescript, ngrx'
}, {
  'client': 'Lotterie Unternehmen',
  'role': 'Frontend Developer',
  tasks: `<ul>
  <li>Neut entwicklung von Features</li>
  <li>Bug fixing</li>
  <li>Angular upgrade</li>
  <li>OPENApi generator anbindung</li>
</ul>`,
  'description': 'Entwicklung einer Verwaltungsoberfläche für Lotterie Unternehmen. Teammitglieder 4. Methode Agile',
  'technologies': 'Angular 8, HTML, SASS, OpenApi Generator, sql Db'
}, {
  'client': 'Stahl Unternehmen',
  'role': 'Frontend Developer',
  tasks: `<ul>
  <li>Architektur / Setup</li>
  <li>Entwicklung neuer Features</li>
</ul>`,
  'description': 'Applikation Kundenmapping',
  'technologies': 'Angular 8, HTML, SASS, amCharts library, ngrx'
}, {
  'client': 'Druckerei Unternehen',
  'role': 'Fullstack Entwickler',
  tasks: `<ul>
  <li>Architektur / Setup</li>
  <li>Entwicklung neuer Features</li>
  <li>Bug fixes</li>
</ul>`,
  'description': 'Applikation welche Aufträge aus Emails extrahiert und diese auf Mitarbeiter aufteilt',
  'technologies': 'Angular 7, HTML, SASS, NodeJs, NestJS, ngrx'
}, {
  'client': 'Restaurant website',
  'role': 'Fullstack Entwickler',
  tasks: `<ul>
  <li>Architektur / Setup</li>
  <li>Entwicklung der Applikation</li>
</ul>`,
  'description': 'Landing Page sowie CRM um angezeigte events zu verwalten und Reservierungen entgegen zu nehmen ',
  'technologies': 'Angular 7, HTML, SASS, ngrx, NestJS, NodeJs, MongoDb'
}, {
  'client': 'Consulting Unternehmen',
  'role': 'Frontend Entwickler',
  tasks: `<ul>
  <li>Neut Entwicklung von Features</li>
  <li>Bug fixing</li>
  <li>Angular upgrade</li>
 </ul>`,
  'description': 'Frontend Entwicklung sowie angular upgrade und Refactoring ',
  'technologies': 'Angular 8-10, Open Api Generator, HTML , SASS'
}]

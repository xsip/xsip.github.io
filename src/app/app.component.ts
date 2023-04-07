import {Component, OnInit} from '@angular/core';
import {projects} from './projects';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// bg-[rgb(253,245,241)] dark:bg-slate-600
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
      <div class="bg-[rgb(253,245,241)] w-full h-screen dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800">
          <div class="w-full flex md:flex-row flex-col mx-0 md:mx-auto md:p-10  text-[rgb(128,131,141)] md:max-w-7xl mt-auto h-screen">
              <div class="flex rounded-tl-md rounded-bl-md flex-col justify-between w-[100%] md:w-[30%] drop-shadow-xl   p-10 pr-10 bg-[rgb(240,240,240)]">
                  <div class="">
                      <img alt="profile" class="w-[100%] rounded-md object-contain h-auto drop-shadow-md"
                           src="../assets/profile.jpg"/>
                      <h1 class="text-xl mt-5 font-bold">Kerschbaumer Stefan</h1>
                      <h1 class="text-xl font-bold">Fullstack Developer</h1>
                      <h1 class="text-md break-words ">Angular, NodeJS, Typescript, NestJS, Javascript,HTML,SCSS,CSS,
                          GraphQL, Rxjs,Ngrx</h1>

                  </div>
                  <div>
                      <div class="gap-2 flex-row mt-2 flex md:inline-block">
                          <a href="tel:+4369911070940"
                             class=" md:pb-1 flex items-center gap-1 cursor-pointer hover:scale-110 md:hover:scale-110 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                   stroke="currentColor" class="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                              </svg>
                              <p class="text-sm">Anrufen </p>
                          </a>
                          <a href="mailto:xsip@pm.me"
                             class="flex md:pb-1  w-auto items-center gap-1 cursor-pointer hover:scale-110 md:hover:scale-110 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                   stroke="currentColor" class="w-4 h-4">
                                  <path stroke-linecap="round"
                                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                              </svg>
                              <p class="text-sm">Email</p>
                          </a>
                          <a href="../assets/cv.pdf" target="_blank"
                             class="flex  md:pb-1 items-center gap-1 cursor-pointer hover:scale-110 md:hover:scale-110 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                   stroke="currentColor" class="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                              </svg>

                              <p class="text-sm">CV</p>
                          </a>

                          <a target="_blank" href="https://www.github.com/xsip"
                             class="flex  items-center gap-1 cursor-pointer hover:scale-110 md:hover:scale-110 transition-all">
                              <img class="w-4 h-4 opacity-70" src="../assets/github-mark.png"/>
                              <p class="text-sm">Github</p>
                          </a>

                      </div>
                  </div>
              </div>
              <div class=" md:overflow-y-scroll dark:bg-slate-700 dark:text-white  pb-12 flex  w-full flex-col md:w-[70%] relative rounded-tr-md rounded-br-md drop-shadow-md bg-white">
                  <nav class="sticky flex flex-row items-center justify-between px-5 top-0 left-0 w-full h-[50px]  pt-2 pb-2 bg-white dark:dark:bg-slate-800 drop-shadow-md">
                      <ul class="h-full flex gap-6  items-center">
                          <a href="#werdegang"
                             class="hover:scale-125 transition-all text-sm cursor-pointer">Werdegang</a>
                          <a href="#projekte" class="hover:scale-125 transition-all text-sm cursor-pointer">Projekte</a>
                          <a href="#übermich" class="hover:scale-125 transition-all text-sm cursor-pointer">Über
                              mich</a>
                      </ul>
                      <div class="h-32">
                          <!--<input
                                  (change)="darkModeChange()"
                                  [(ngModel)]="darkMode"
                                  class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"/>
                          <label
                                  class="inline-block text-sm pl-[0.15rem] hover:cursor-pointer"
                                  for="flexSwitchCheckDefault"
                          >darkmode</label
                          >!-->
                      </div>
                    <div *ngIf="darkMode" (click)="darkModeToggle()" class="z-50 w-5 cursor-pointer hover:scale-110 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                    </svg>
                    </div>
                    <div *ngIf="!darkMode" (click)="darkModeToggle()" class="z-50 w-5 flex cursor-pointer hover:scale-110 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                      </svg>

                    </div>
                  </nav>
                  <div id="werdegang" class="px-10 pt-10 pb-10">
                      <h1 class="text-2xl font-bold pb-2">Werdegang</h1>
                      <div class="mt-5">
                          <p class="text-md font-bold">05/2017 - 05/2023</p>
                          <p class="ml-5 text-md">Lean Coders Gmbh</p>
                          <p class="ml-5 text-md">Fullstack developer</p>
                      </div>
                  </div>
                  <div id="projekte" class="px-10 pt-10 pb-10">
                      <h1 class="text-2xl font-bold pb-2">Projekte</h1>
                      <div *ngFor="let project of projects" class="mt-5 border-b-2 pb-2">
                          <p class=" font-bold text-md">Kunde</p>
                          <p class="text-md ml-5">{{project.client}}</p>
                          <p class=" font-bold text-md">Rolle</p>
                          <p class="ml-5 text-md">{{project.role}}</p>
                          <p class=" font-bold text-md">Tasks</p>
                          <p class="ml-5 text-md" [innerHTML]="project.tasks"></p>
                          <p class=" font-bold text-md">Beschreibung</p>
                          <p class="ml-5 text-md">{{project.description}}</p>
                          <p class=" font-bold text-md">Technologie</p>
                          <p class="ml-5 text-md">{{project.technologies}}</p>
                      </div>
                  </div>
                  <div id="übermich" class=" px-10 pt-12 py-5">
                      <h1 class="text-2xl font-bold pb-2">Über mich</h1>
                      <p>
                          Mein Name ist Kerschbaumer Stefan und ich bn seit mittlerweile Sechs Jahren als Fullstack
                          Developer Tätig. Ich arbeite im Frontend hauptsächlich mit Angular - beherrsche allerdings
                          auch
                          nextjs - und entwickle Backend Applikationen mit NestJS, Express oder NodeJS. Außerdem
                          beherrsche
                          ich typescript sehr gut, habe Kenntnisse in GraphQL, rxjs, ngrx und kann mit Sql, sowie NoSql(
                          MongoDB ) Datenbanken umgehen.
                      </p>
                      <p class="pt-10">
                          Mein Fokus in der Entwicklung von frontend Applikationen lag und liegt dabei immer in der
                          Entwicklung von Logiken.
                          Vor meinem beruflichen Werdegang als Software Developer machte ich eine Ausbildung als
                          Kälteanlagen Techniker welche mir allerdings nie wirklich spaß gemacht hat. Ja klar, jetzt
                          kommt
                          bestimmt die Frage auf weshalb ich nicht gleich damit begonnen hab meinen Traum zu leben und
                          darauf
                          gibt es eine ganz einfache Antwort.
                          Ich war immer schon ein motivierter Mensch, hatte keine Lust nach der Schule nichts zu tun und
                          habe zeitlich leider keinen Job im Bereich der Software Entwicklung gefunden weshalb ich mich
                          dann
                          eben entschloss bevor ich zuhause sitze in der Firma meines Vaters eine Ausbildung zu starten.
                      </p>
                      <p class="pt-10">
                          Die sechs Jahre welche ich nun eben als Software Developer gearbeitet habe, habe ich Bei Lean
                          Coders verbracht was auch eine echt tolle Firma ist. Machmmal allerdings, da kommt das
                          Verlangen zur
                          Veränderung und sommit entschloss ich Mitte Mai 2023 diese Firma zu verlassen und nach etwas
                          neuem
                          Ausschau zu halten.
                      </p>
                      <p class="pt-10">
                          Im nächsten abschnitt sehen sie eine Auflistung der Projekte in welchen ich für lean coders
                          gearbeitet hab.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  darkMode = false;
  title = 'cv-2';
  projects: {client: string;tasks?: string;role: string;description: string; technologies: string;}[] = projects;
  darkModeToggle() {
    this.darkMode = !this.darkMode;
    this.darkModeChange();
  }
  darkModeChange() {
    localStorage.setItem('dark', JSON.stringify(this.darkMode));
    if(this.darkMode) {
      document.body.classList.add('dark');

      return;
    }
    document.body.classList.remove('dark');
  }
  ngOnInit() {
    this.darkMode = JSON.parse(localStorage.getItem('dark') ?? 'true');
    this.darkModeChange();
  }
}

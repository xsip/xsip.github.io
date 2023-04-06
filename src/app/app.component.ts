import { Component } from '@angular/core';
import {projects} from './projects';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="w-full flex md:flex-row flex-col mx-0 md:mx-auto md:p-10 bg-[rgb(253,245,241)] text-[rgb(128,131,141)] md:max-w-7xl mt-auto h-screen">
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
                  <div class="flex gap-2 flex-col md:flex-col">
                      <div class="flex items-center gap-1 cursor-pointer hover:scale-110 md:hover:scale-110 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" class="w-4 h-4">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                          </svg>
                          <p class="text-sm">Email </p>
                      </div>
                      <div class="flex  items-center gap-1 cursor-pointer hover:scale-110 md:hover:scale-110 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" class="w-4 h-4">
                              <path stroke-linecap="round"
                                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                          </svg>
                          <p class="text-sm">Anrufen</p>
                      </div>

                  </div>
              </div>
          </div>
          <div class=" md:overflow-y-scroll pb-10 flex  w-full flex-col md:w-[70%] relative rounded-tr-md rounded-br-md drop-shadow-md bg-white">
              <nav class="sticky flex flex-col items-center justify-center top-0 left-0 w-full h-[50px]  pt-2 pb-2 bg-white drop-shadow-md">
                  <ul class="h-full flex gap-6  items-center">
                      <a href="#übermich" class="hover:scale-125 transition-all text-md cursor-pointer">Über mich</a>
                      <a href="#werdegang" class="hover:scale-125 transition-all text-md cursor-pointer">Werdegang</a>
                      <a href="#projekte" class="hover:scale-125 transition-all text-md cursor-pointer">Projekte</a>
                  </ul>
              </nav>
              <div id="übermich" class="h-full px-10 pt-12 h-full py-5">
                <h1 class="text-2xl font-bold pb-2">Über mich</h1>
                  <p>
                      Mein Name ist Kerschbaumer Stefan und ich bn seit mittlerweile Sechs Jahren als Fullstack
                      Developer Tätig. Ich arbeite im Frontend hauptsächlich mit Angular - beherrsche allerdings auch
                      nexts - und entwickle Backend Applikationen mit NestJS, Express oderNodeJS. Außerdem beherrsche
                      ich typescript sehr gut, habe Kenntnisse in GraphQL, rxjs, ngrx und kann mit Sql, sowie NoSql(
                      MongoDB ) Datenbanken umgehen.
                  </p>
                  <p class="pt-10">
                      Mein Fokus in der Entwicklung von frontend Applikationen lag und liegt dabei immer in der
                      Entwicklung von Logiken.
                      Vor meinem beruflichen Werdegang als Software Developer machte ich eine Ausbildung als
                      Kälteanlagen Techniker welche mir allerdings nie wirklich spaß gemacht hat. Ja klar, jetzt kommt
                      bestimmt die Frage auf weshalb ich nicht gleich damit begonnen hab meinen Traum zu lebe und darauf
                      gibt es eine ganz einfache Antwort.
                      Ich war immer schon ein motivierter Mensch, hatte keine lust nach der Schule nichts zu tun und
                      habe zeitlich leider keinen Job im Bereich der Software Entwicklung gefunden weshalb ich mich dann
                      eben Entschluss bevor ich zuhause sitze in der Firma meines Vaters eine Ausbildung zu staten.
                  </p>
                  <p class="pt-10">
                      Die sechs Jahre welche ich nun eben als Software Developer gearbeitet hab, habe ich Bei Lean
                      Coders verbracht was auch eine echt tolle Firma ist. Machmmal allerdings, da kommt das Verlangen
                      Veränderung und sommit Entschluss ich Mitte Mai diese Firma zu verlassen und nach etwas neuem
                      Ausschau zu halten.
                  </p>
                  <p class="pt-10">
                      Im nächsten abschnitt sehen sie eine Auflistung der Projekte in welchen ich für lean coders
                      gearbeitet hab.
                  </p>
              </div>
            <div id="werdegang" class="px-10 h-full pt-10 pb-10">
              <h1 class="text-2xl font-bold pb-2">Werdegang</h1>
              <div class="mt-5">
                <p class="text-md font-bold">05/2017 - 05/2023</p>
                <p class="ml-5 text-md">Lean Coders Gmbh</p>
                <p class="ml-5 text-md">Fullstack developer</p>
              </div>
            </div>
            <div id="projekte" class="px-10 h-full pt-10 pb-10">
              <h1 class="text-2xl font-bold pb-2">Projekte</h1>
              <div *ngFor="let project of projects" class="mt-5">
                <p class="text-md font-bold">{{project.client}}</p>
                <p class="ml-5 text-md">{{project.role}}</p>
                <p class="ml-5 text-md">{{project.description}}</p>
                <p class="ml-5 text-md">{{project.technologies}}</p>
              </div>
            </div>
          </div>
      </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'cv-2';
  projects: {client: string;role: string;description: string; technologies: string;}[] = projects;
}

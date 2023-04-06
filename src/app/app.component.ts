import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
      <div class="w-full flex mx-auto p-10 bg-[rgb(253,245,241)] text-[rgb(128,131,141)] max-w-7xl mt-auto h-screen">
          <div class="flex rounded-tl-md rounded-bl-md flex-col justify-between w-[30%] drop-shadow-xl  border-2 p-10 pr-10 bg-[rgb(240,240,240)]">
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
          <div class="flex w-[70%] relative rounded-tr-md rounded-br-md drop-shadow-md bg-white pt-20 pl-2 pr-2 border-2">
              <nav class="fixed flex flex-col items-center justify-center top-0 left-0 w-full h-16 bg-white drop-shadow-md">
                  <ul class="flex gap-6">
                      <li class="hover:scale-125 transition-all text-md cursor-pointer">Über mich</li>
                      <li class="hover:scale-125 transition-all text-md cursor-pointer">Werdegang</li>
                      <li class="hover:scale-125 transition-all text-md cursor-pointer">Projekte</li>
                  </ul>
              </nav>
            <p class="px-10">
              Mein Name ist Kerschbaumer Stefan und ich bn seit mittlerweile Sechs Jahren als Fullstack Developer Tätig. Ich arbeite im Frontend hauptsächlich mit Angular - beherrsche allerdings auch nexts - und entwickle Backend Applikationen mit NestJS, Express oderNodeJS. Außerdem beherrsche ich typescript sehr gut, habe Kenntnisse in GraphQL, rxjs, ngrx und kann mit Sql, sowie NoSql( MongoDB ) Datenbanken umgehen.
            </p>
          </div>
      </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'cv-2';
}

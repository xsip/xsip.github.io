import {AfterViewInit, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AsyncPipe, isPlatformBrowser, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {ConnectingDotsDirective} from "./connecting-dots.directive";
import { share } from 'rxjs';
import {FormsModule} from "@angular/forms";
import {ProjectComponent} from "./project/project.component";
import {Project} from "./models/project";
import {projects} from "./data/projects";
import {bounceIn, fadeInOut} from "./animations";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgTemplateOutlet, ConnectingDotsDirective, AsyncPipe, NgIf, RouterLink, RouterLinkActive, FormsModule, ProjectComponent],
  template: `
    <div [@fadeInOut]="true" class="relative h-auto pb-10">
      <div
        class="w-[100vw] sticky top-0 left-0 bg-white dark:bg-gray-800 dark:text-white z-[999] md:drop-shadow-2xl h-[3rem]">
        <div class="container md:mx-auto px-10  flex h-full justify-between items-center">
          <h1>Portfolio</h1>
          <div class="flex gap-5 justify-between">
            <div
              class="z-10 w-16 h-8 hover:scale-100 scale-95  transition-transform duration-75 cursor-pointer"
            >
              <input
                type="checkbox"
                id="dark-mode-toggle"
                [(ngModel)]="darkMode"
                class="hidden"
                (change)="darkModeToggle()"
              />
              <label
                for="dark-mode-toggle"
                class="transition-all delay-0 w-full h-full bg-[rgb(220,220,220)] dark:bg-slate-600 rounded-md p-1 flex justify-between items-center  cursor-pointer"
              >
                    <span class="inline ml-1 dark:hidden"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    </span>
                <span
                  class="w-6 h-6 rounded-md opacity-80 bg-white dark:bg-gray-800 block float-right dark:float-left"
                ></span>
                <span class="hidden ml-1 dark:inline"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    </span>
              </label>
            </div>
          </div>
        </div>
        <div class="progress"></div>

      </div>
      <div
        class="w-[100vw] fixed  bottom-0 left-0 bg-white dark:bg-gray-800 dark:text-white z-[999] md:drop-shadow-2xl h-[3rem]">

        <div class="container md:mx-auto   py-2 flex h-full items-center">
          <div class="flex gap-2">
            <div
              class="flex items-center dark:fill-white dark:text-white hover:scale-105 cursor-pointer transition-all ease-in-out px-5 gap2">
              <img class="h-9 dark:hidden" src="/./assets/icons/github-mark.svg" alt="">
              <img class="h-9 hidden dark:block" src="/./assets/icons/github-mark-dark.svg" alt="">
              <p class="ml-5 font-bold">GitHub</p>
            </div>
            <div class="flex items-center px-5 hover:scale-105 cursor-pointer transition-all ease-in-out gap2">
              <img class="h-9" src="/./assets/icons/LI-In-Bug.png" alt="">
              <p class="ml-5 font-bold">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
      <div id="home" class="hero h-[calc(100vh-3rem)] w-[100vw] relative overflow-hidden">
        <div appConnectingDots class="h-full backdrop-blur-md relative top-0 left-0 z-10 overflow-hidden">
          <div class="h-full w-full flex z-50 justify-center items-center container  overflow-hidden md:mx-auto mx-10">
            <div class="text-white w-full break-words">
              <p class="md:text-[50px] text-[20px]">{{ hiIAm }}</p>
              <h1 class="font-medium md:text-[100px] text-[50px]">{{ myName }}</h1>
              <p class="md:text-[40px] text-[15px]">{{ jobTitle }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="erfahrung" class="container md:mx-auto md:px-0 px-10 py-10  min-h-screen  flex flex-col md:flex-row gap-10 ">
        <div data-aos="fade-right" class="md:w-1/3">
          <h1 class="font-medium dark:text-white md:text-[80px] text-[30px] pb-10">Erfahrung</h1>
          <div
            class="mt-5 w-full drop-shadow-2xl  dark:bg-slate-800  dark:text-white rounded-lg bg-neutral-50 text-black shadow-secondary-1">
            <div class="border-b-2 border-black/20 px-6 py-3 items-center self-center">2023- AKTUELL</div>
            <div class="p-6 flex items-center flex-col justify-center">
              <h5 class="mb-2 text-xl font-medium leading-tight">
                TwinFormatics Gmbh
              </h5>
              <img class="mt-5 pb-5 dark:invert" src="/./assets/twinformatics.jpeg" alt="">
              <p class="text-base">
                Senior Fullstack Developer im bereich Versicherungen.
              </p>
            </div>
          </div>
          <div data-aos="fade-right"
            class="mt-5 w-full drop-shadow-2xl  dark:bg-slate-800  dark:text-white rounded-lg bg-neutral-50 text-black shadow-secondary-1">
            <div class="border-b-2 border-black/20 px-6 py-3 items-center self-center">2017-2023</div>
            <div class="p-6 flex items-center flex-col justify-center">
              <h5 class="mb-2 text-xl font-medium leading-tight">
                Lean Coders Gmbh
              </h5>
              <img class="mt-5 pb-5 dark:invert" src="/./assets/lean-coders.png" alt="">
              <p class="text-base">
                Senior Fullstack Developer im Consulting mit Einsatz in diversen Projekten. Für mehr informationen siehe
                <b>ProjektListe</b>
              </p>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left" class="me-image  drop-shadow-2xl rounded-md md:w-2/3 md:block hidden"></div>
      </div>
      <div class="me-image-sm md:hidden block w-[100vw] h-[100vh]">
        <div class="h-full backdrop-blur-xs bg-[rgba(35,35,35,0.7)] relative top-0 left-0 z-10 overflow-hidden">
        </div>
      </div>
      <div class="w-full min-h-full  bg-gray-100 dark:bg-transparent">
        <div class="container mt-10 md:mx-auto md:px-0 px-10 py-10 min-h-screen   gap-10 ">
          <div data-aos="fade-in">
            <h1 class="font-medium dark:text-white md:text-[80px] text-[30px] pb-10">Projektliste</h1>
          </div>
          <div class="grid md:grid-cols-3 grid-cols-1  items-center gap-5 w-full h-full">
            <!--<div
              class="absolute w-full h-full top-0 left-0  z-[-1] backdrop-blur-sm rounded-lg shadow-inner shadow-2xl"></div>
            !-->
            <ng-container *ngFor="let project of projects">
              <app-project data-aos="zoom-in" [project]="project"/>
            </ng-container>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .progress {
        z-index: 9;
        height: 100%;
        @apply bg-[rgba(35,35,35,0.2)] dark:bg-slate-700/40;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform-origin: 0 50%;
        animation: scaleProgress auto linear forwards;
        animation-timeline: scroll(root);
      }

      @keyframes scaleProgress {
        0% {
          transform: scaleX(0);
        }
        100% {
          transform: scaleX(1);
        }
      }

      @keyframes colorChange {
        0% {
          background-color: red;
        }
        50% {
          background-color: yellow;
        }
        100% {
          background-color: lime;
        }
      }


      .active {
        @apply underline font-bold;
      }
      .lean-coders {
        background-image: url("/./assets/lean-coders.png");
        background-size: cover;
        @apply bg-[rgba(235,235,235,0.8)];
      }

      .hero {
        background-image: url('/./assets/scene.jpeg');
        background-attachment: fixed;
        background-size: cover;
        background-position-y: 80%;
      }

      .me-image {
        background-image: url('/./assets/me.jpeg');
        background-size: cover;
        background-position-y: 80%;
      }

      .me-image-sm {
        background-image: url('/./assets/me.jpeg');
        background-size: cover;
        background-position-x: 40%;
        background-attachment: fixed;
      }

      .switch {
        background-image: url('/./assets/switch.jpg');
        background-size: cover;
      }

      .medicin {
        background-image: url('/./assets/medicin.jpg');
        background-size: cover;
      }

      .glassmorphism {
        @apply bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ;
      }
    `
  ],
  animations: [fadeInOut()]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  platformId = inject(PLATFORM_ID);
  projects: Project[] = projects;
  hiIAm = '';
  hiIAmFullText = 'Hi, ich bin';
  myName = '';
  myNameFullText = 'Kerschbaumer Stefan';
  darkMode = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  activeFragment$ = this.route.fragment.pipe(share());

  jobTitle = '';
  jobTitleFullText = 'Senior Fullstack Developer aus Wien';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = !JSON.parse(localStorage.getItem('dark') ?? 'false');
      this.darkModeToggle();
      let hiIaAmIteration = 0;
      const ival = setInterval(() => {
        if (this.hiIAm !== 'Hi, ich bin') {
          this.hiIAm += this.hiIAmFullText[hiIaAmIteration];
          hiIaAmIteration++
          return;
        }
        this.renderName();
        clearInterval(ival);
      }, 50);
    } else {
      this.hiIAm = this.hiIAmFullText;
      this.myName = this.myNameFullText;
      this.jobTitle = this.jobTitleFullText;
    }
  }

  renderName() {

    let nameIteration = 0;
    const ival = setInterval(() => {
      if (this.myName !== 'Kerschbaumer Stefan') {
        this.myName += this.myNameFullText[nameIteration];
        nameIteration++
        return;
      }
      this.renderTitle();
      clearInterval(ival);
    }, 30);
  }

  renderTitle() {

    let titleIteration = 0;
    const ival = setInterval(() => {
      if (this.jobTitle !== 'Senior Fullstack Developer aus Wien') {
        this.jobTitle += this.jobTitleFullText[titleIteration];
        titleIteration++
        return;
      }
      clearInterval(ival);
    }, 20);
  }

  darkModeToggle() {
    localStorage.setItem('dark', JSON.stringify(!this.darkMode));
    if (!this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}


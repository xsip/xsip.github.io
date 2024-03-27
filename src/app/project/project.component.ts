import {Component, input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Project} from "../models/project";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `

    <div
      class="block dark:text-white  mt-5 min-h-[600px] relative w-full  drop-shadow-2xl rounded-lg dark:bg-slate-800 dark:bg-opacity-100 bg-white bg-opacity-40 text-gray-800 shadow-secondary-1">

      <div
        class="absolute w-full z-[-10] h-[600px] top-0 left-0   rounded-lg dark:bg-slate-800 dark:bg-opacity-100 bg-white bg-opacity-40"></div>
      <div class="flex flex-col z-20 h-[600px] p-6 justify-between">
        <div class="flex  h-1/4 items-center flex-col justify-center">
          <div
            class=" w-full items-center flex justify-center border-b-2 dark:border-white/20 border-black/20 md:h-[5rem] h-[6rem]  font-bold px-3 py-3">{{ project().jobName }}
          </div>
          <h5
            class="mb-2 flex items-center border-b-2 pb-5 justify-center w-full dark:border-white/20 border-black/20  pl-2 text-xl mt-5 font-medium leading-tight">
            {{ project().position }}
          </h5>
        </div>
        <p class="h-1/4 mt-2">{{ project().description }}</p>
        <ul class="h-1/4 mt-5 ml-5 list-disc">
          <li *ngFor="let bulletPoint of project().bulletPoints">
            {{ bulletPoint }}
          </li>
        </ul>
        <p class="h-1/4 mt-10">
          <b>Technologien:</b> {{ project().technologies }}</p>
      </div>
    </div>
  `,
  styles: ``
})
export class ProjectComponent {

  project = input<Project>({} as Project);
}

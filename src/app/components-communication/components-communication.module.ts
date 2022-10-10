import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsCommunicationModuleRouting } from "./components-communication-routing.module";

import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { GrandChildComponent } from "./components/grand-child/grand-child.component";
import { ComponentsCommunicationComponent } from "./components-communication.component";
import { ParentChildComponent } from "./pages/parent-child/parent-child.component";
import { ChildParentComponent } from "./pages/child-parent/child-parent.component";
import { ParentChildGrandChildComponent } from "./pages/parent-child-grand-child/parent-child-grand-child.component";
import { GrandChildChildParentComponent } from "./pages/grand-child-child-parent/grand-child-child-parent.component";

@NgModule({
  imports: [CommonModule, ComponentsCommunicationModuleRouting],
  declarations: [
    ComponentsCommunicationComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    ParentChildComponent,
    ChildParentComponent,
    ParentChildGrandChildComponent,
    GrandChildChildParentComponent,
  ],
})
export class ComponentsCommunicationModule {}

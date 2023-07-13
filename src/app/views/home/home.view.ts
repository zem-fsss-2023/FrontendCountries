import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NotesService } from "src/app/services/notes.service";
import { Note } from "src/app/types/note";
import { BaseView } from "../base/base.view";

@Component({
    selector: 'fsss-home-view',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeView extends BaseView<{ipAdress: string, cityInfo: string}> implements OnDestroy {
    private service: NotesService = inject(NotesService);

    constructor(){
        super();
        this.uiData$ = new BehaviorSubject({ipAdress: "", cityInfo: ""});
    }

    getCityInfo(){
        this.callService(this.service.getCityInfo(this.uiData$.value.ipAdress)).then(
            cityInfo => this.updateUiData({cityInfo})
        );
    }

    ipAdressChanged(ipAdress: string){
        this.updateUiData({ipAdress});
    }
}

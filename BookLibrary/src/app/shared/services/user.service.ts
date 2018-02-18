import { BaseService } from "./BaseService";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "firebase/app";
import { AppUser } from "../enitites/appuser";

@Injectable()
export class UserService extends BaseService<AppUser> {

    constructor(private firedb: AngularFireDatabase) {
        super(firedb, 'user');
    }

}
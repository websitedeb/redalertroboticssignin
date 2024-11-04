import express, {json, urlencoded} from "express";
import CORS from "cors";
import { NewCode, currentCode } from "./cron.mjs"
import bcrypt from "bcrypt";
import { DB } from './db.mjs'
import { join } from "path";
import { config } from "dotenv";

config({ path: join(process.cwd(), "./server/.env") });
const passcode = process.env.CODE;

const app = express();
const db = new DB()
let hash;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(join(process.cwd(), "build")));
app.use(CORS({
    origin: 'http://localhost:3000'
}));

app.listen(8080, async () => {
    hash = await NewCode();
});

app.post("/api/signin", (req, res) => {
    const { name, date, code, ratio } = req.body;
    const formattedDate = new Date(date);

    bcrypt.compare(`${code}`, `${hash}`).then((result) => {
        if (result) {
            db.add(name.toLowerCase(), formattedDate, ratio);
            res.json({
                status: 1
            });
        } else {
            res.status(400).json({
                status: 0,
                error: "Invalid code"
            });
        }
    });
});

app.post("/api/code/auth", (req, res) => {
    const { auth } = req.body;

    if(auth == passcode){
        res.send(currentCode);
    }else{
        res.status(400).json({
            status: 0,
            error: "Invalid auth"
        });
    }
});
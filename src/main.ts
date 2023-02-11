import sleep from './sleep';
import stage0 from './stages/stage0';
import stage1 from './stages/stage1';
import { setStatusMessage } from './status';
import './style.css'

async function play() {
    setStatusMessage("STAGE 0");
    await stage0();


    setStatusMessage("");
    await sleep(1000);

    setStatusMessage("STAGE 1");
    await stage1();
}

document.getElementById("play")?.addEventListener('click', (e) => {
    e.preventDefault();
    (e.target as any).remove();

    play();
})
import { StarCanvas } from '../../components/StarCanvas'
import './games.css'

export function Game() {
    return(
        <div className='text-white'>
            <StarCanvas/>
            <h2 className='mt-10'>Choose your game</h2>
            <div id="game-container">
                <div class="container">
                    <img src="/fotos/stickhero.png" alt="Stick Hero" />
                    <p class="game-title">Stick Hero</p>
                    <a class="play-button" href='/stickhero/stickhero.html' >▶</a>
                </div>

                <div class="container">
                    <img src="/fotos/towerblocks.png" alt="Tower Blocks" />
                    <p class="game-title">Tower Blocks</p>
                    <a class="play-button" href='/towerblock/blocks.html' >▶</a>
                </div>
            </div>
        </div>
    )
}
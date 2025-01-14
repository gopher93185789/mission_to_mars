import { Rings } from '../../components/Rings'
import { BigText } from '../../components/BigText'
import './style.css'

const books = [
    {image: "dracula.jpg", title: "Dracula", info: '"A classic horror story by Bram Stoker about vampires, mystery, and a journey to Transylvania. Follow the battle between Dracula and those who try to stop him."'},
    {image: "moby.png", title: "Moby Dick", info: '"An epic tale of a sea captain’s obsession with hunting a giant whale. The story explores adventure, fate, and the power of nature."'},
    {image: "romeo.jpg", title: "Romeo and Juliet", info: '"A timeless love story by Shakespeare. Two young lovers from feuding families face challenges that lead to a tragic end."'},
    {image: "gatsby.jpg", title: "The Great Gatsby", info: '"A story about wealth, love, and the American Dream. Set in the Roaring Twenties, it follows the mysterious Jay Gatsby and his obsession with Daisy."'},
]


export function Ebooks() {
    return (
        <>  
            <Rings />
            <BigText text='Library' />
            <div className="w-full h-full mt-5 justify-center flex flex-row gap-10">
                {books.map((item, idx) => (
                <div key={idx} className="ebook-card">
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <div className="ebook-actions">
                        <div className="info-container">
                            <button className="info-btn">ℹ</button>
                            <span className="info-popup">{item.info}</span>
                        </div>
                        <button className="read-btn" onClick={() => window.location.href='tekst/dracula.html'}>Read</button>
                    </div>
                </div>
                ))}
                
            </div>
        </>
    )
}

// jazz
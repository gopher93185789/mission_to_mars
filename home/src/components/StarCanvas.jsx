import { useRef, useEffect } from "react";



export function StarCanvas({numStars=100, height=window.innerHeight, width=(window.innerWidth/4)*3}) {
    const canvasRef = useRef(null);
    
        useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            
            const drawStar = (ctx, cx, cy, pointes, or, ir, brightness) => {
                let rot = Math.PI / 2 * 3;
                let x = cx;
                let y = cy;
                const step = Math.PI / pointes;
            
                ctx.beginPath();
                ctx.moveTo(cx, cy - or);
            
                for (let i = 0; i < pointes; i++) {
                    x = cx + Math.cos(rot) * or;
                    y = cy + Math.sin(rot) * or;
                    ctx.lineTo(x, y);
                    rot += step;
            
                    x = cx + Math.cos(rot) * ir;
                    y = cy + Math.sin(rot) * ir;
                    ctx.lineTo(x, y);
                    rot += step;
                }
            
                ctx.lineTo(cx, cy - or);
                ctx.closePath();
                ctx.lineWidth = 0.01; 
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
                ctx.fill();
            };
            
    
    
            const scaleFactor = window.devicePixelRatio || 1;
            canvas.width *= scaleFactor;
            canvas.height *= scaleFactor;
            ctx.scale(scaleFactor, scaleFactor);
            
            if (ctx) {
                for (let i = 0; i < numStars; i++) {
                    const x = Math.random() * width;
                    const y = Math.random() * height;
              
                    drawStar(ctx, x, y, 5, 1, 0.5, 0.4);
                }
            }

        }, []);

    

        return (
            <canvas 
                ref={canvasRef} 
                width={width} 
                height={height} 
                className="absolute top-0 left-0 -z-10 overflow-hidden rounded-tr-[50%] ">
             </canvas>
        )

}
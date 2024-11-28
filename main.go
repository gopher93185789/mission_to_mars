package main

import (
	"fmt"
	"os"
	"path/filepath"
)

func main() {
	for i := range 12{
		dir := fmt.Sprintf("pagina_%d", i+1)
		fp := filepath.Join(dir, "src")
		fp2 := filepath.Join(dir, "styles")
		fd := filepath.Join(dir, "index.html")
		os.Create(fd)

		os.MkdirAll(fp, 0777)
		os.MkdirAll(fp2, 0777)

		f3 := filepath.Join(dir, "src/script.js")
		fp4 := filepath.Join(dir, "styles/style.css")

		os.Create(f3)
		os.Create(fp4)
	}
}
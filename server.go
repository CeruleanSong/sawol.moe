package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

const port = 3636
const DEVELOPMENT = true

var templates = template.Must(template.ParseGlob("view/*"))

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	if DEVELOPMENT {
		/** dynamically load templates on each request for development env */
		templates = template.Must(template.ParseGlob("view/*"))
	}

	err := templates.ExecuteTemplate(w, "page_index", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func ProjectHandler(w http.ResponseWriter, r *http.Request) {
	if DEVELOPMENT {
		/** dynamically load templates on each request for development env */
		templates = template.Must(template.ParseGlob("view/*"))
	}

	err := templates.ExecuteTemplate(w, "page_projects", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	router := mux.NewRouter()

	/** template file serve */
	router.HandleFunc("/", IndexHandler)
	router.HandleFunc("/projects", ProjectHandler)
	http.Handle("/", router)

	/** static file serve */
	dir := http.Dir("public/")
	fileServer := http.FileServer(dir)
	http.Handle("/public", fileServer)
	router.PathPrefix("/public/").Handler(http.StripPrefix("/public/", fileServer))

	faviconDir := http.Dir("public/favicon.ico")
	faviconServer := http.FileServer(http.Dir(faviconDir))
	http.Handle("/favicon.ico", faviconServer)
	router.PathPrefix("/").Handler(
		http.StripPrefix("/", http.FileServer(dir)),
	)

	/** finished */
	fmt.Printf("Listening on port %d\n", port)
	address := fmt.Sprintf("localhost:%d", port)

	server := &http.Server{
		Handler:      router,
		Addr:         address,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(server.ListenAndServe())
}

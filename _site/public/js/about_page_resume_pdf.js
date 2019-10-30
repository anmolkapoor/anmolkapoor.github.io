// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = pdf_url_to_view;

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

// Asynchronous download of PDF
var loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function (pdf) {
    console.log('PDF loaded');

    // Fetch the first page
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded');


        // Prepare canvas using PDF page dimensions
        var container = document.getElementById(
            'resume_display_area');
        var canvas = document.getElementById('the-canvas');
        var context = canvas.getContext('2d');


        var viewport = page.getViewport({scale:1});
        var scale = container.clientWidth / viewport.width;
        viewport = page.getViewport({scale:scale});

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
            console.log('Page rendered');
        });
    });
}, function (reason) {
    // PDF loading error
    console.error(reason);
});


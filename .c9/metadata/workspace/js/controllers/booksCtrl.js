{"filter":false,"title":"booksCtrl.js","tooltip":"/js/controllers/booksCtrl.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":48,"column":7},"action":"insert","lines":["angular.module(\"library\") ","\t.controller(\"booksCtrl\", function($scope, LibraryService) {","        $scope.newBook = new Array();","        $scope.editBookId = null;","","        $scope.bookCategories = LibraryService.getBooksCategories();","","        $scope.addBookToCategory = function(category, book) {","            if(category.books) {","                category.books.push(book);","            } else {","                category.books = new Array();","                category.books.push(book);","            }","            LibraryService.updateBookCategory(category);","            $scope.newBook = {};","        }","","        $scope.removeBook = function(id, bookId) {","            $scope.bookCategories[id].books.splice(bookId, 1);","            LibraryService.updateBookCategory(id);","        }  ","","        $scope.editBook = function(categoryId,id) {","        \tif($scope.editBookId != null) {","\t        \tif($scope.editBookId.id == id && $scope.editBookId.categoryId == categoryId) {","\t        \t\treturn true;","\t        \t} else {","\t        \t\treturn false;","\t        \t}","        \t}","        }","","        $scope.updateBook = function(categoryId,id) {","        \tif($scope.editBookId != null) {      \t","            \tLibraryService.updateBookCategory(categoryId); ","            \tif($scope.editBookId.id == id && $scope.editBookId.categoryId == categoryId) {","            \t\t$scope.editBookId = null;\t","            \t} else {","            \t\t$scope.editBookId.id = id;","            \t\t$scope.editBookId.categoryId = categoryId;","            \t}","            \t","            } else {","            \t$scope.editBookId = {id: id, categoryId: categoryId};","            }","        }","        ","    });"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":20},"end":{"row":10,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424985023765,"hash":"43776c723a4ded5f8e8ac92e7d5dc61ff8843829"}
angular.module("library") 
	.controller("booksCtrl", function($scope, LibraryService) {
        $scope.newBook = new Array();
        $scope.editBookId = null;

        $scope.bookCategories = LibraryService.getBooksCategories();

        $scope.addBookToCategory = function(category, book) {
            if(category.books) {
                category.books.push(book);
            } else {
                category.books = new Array();
                category.books.push(book);
            }
            LibraryService.updateBookCategory(category);
            $scope.newBook = {};
        }

        $scope.removeBook = function(id, bookId) {
            $scope.bookCategories[id].books.splice(bookId, 1);
            LibraryService.updateBookCategory(id);
        }  

        $scope.editBook = function(categoryId,id) {
        	if($scope.editBookId != null) {
	        	if($scope.editBookId.id == id && $scope.editBookId.categoryId == categoryId) {
	        		return true;
	        	} else {
	        		return false;
	        	}
        	}
        }

        $scope.updateBook = function(categoryId,id) {
        	if($scope.editBookId != null) {      	
            	LibraryService.updateBookCategory(categoryId); 
            	if($scope.editBookId.id == id && $scope.editBookId.categoryId == categoryId) {
            		$scope.editBookId = null;	
            	} else {
            		$scope.editBookId.id = id;
            		$scope.editBookId.categoryId = categoryId;
            	}
            	
            } else {
            	$scope.editBookId = {id: id, categoryId: categoryId};
            }
        }
        
    });
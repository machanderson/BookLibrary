angular.module("library") 
	.controller("categoryCtrl", function($scope, LibraryService) {
        $scope.newCategory = {};
        $scope.editCategoryId = null;

        $scope.bookCategories = LibraryService.getBooksCategories();

        $scope.editBookCategory = function(id) {
        	if($scope.editCategoryId == id) {
        		return true;
        	} else {
        		return false;
        	}
        }

        $scope.addBookCategory = function() {
            LibraryService.addBookCategory($scope.newCategory);
            $scope.newCategory = {};
            
        }
        $scope.removeBookCategory = function(id) { 
            LibraryService.removeBookCategory(id);
        }
        
        $scope.updateBookCategory = function(id) { 
        	if($scope.editCategoryId != null) {      	
            	LibraryService.updateBookCategory(id); 
            	if($scope.editCategoryId == id) {
            		$scope.editCategoryId = null;	
            	} else {
            		$scope.editCategoryId = id;
            	}
            	
            } else {
            	$scope.editCategoryId = id;
            }
        }
    });
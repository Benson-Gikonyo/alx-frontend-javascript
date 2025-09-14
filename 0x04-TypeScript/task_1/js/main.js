;
;
;
function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, ". ").concat(lastName);
}
;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    ;
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

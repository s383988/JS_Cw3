(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
	// tworzenie nowego obiektu o podanym prototypie
	var newObject = Object.create(constructor.prototype);
  	// konwersja argumentow na tablice, 
	// wydobycie argumentow z tablicy od 1. do ostatniego
   	var allArguments = Array.prototype.slice.call(arguments, 1);
	// wykonanie funkcji konstruktora w ramach utworzonego obiektu
  	var result = constructor.apply(newObject, allArguments);
  	if (typeof result == "object") {
    	// jesli konstruktor zwraca jakis obiekt, zwraca go
    	return result;
 	}
	// jesli nie, zwroci poczatkowo utworzony obiekt
  	return newObject;
	}

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/



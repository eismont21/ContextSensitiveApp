var DecisionTreeClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    this.predict = function(features) {
        var classes = new Array(3);
            
        if (features[3] <= -4.539999961853027) {
            if (features[1] <= 0.022358634509146214) {
                if (features[0] <= 0.038555318489670753) {
                    if (features[4] <= 30.0) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 5; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 108; 
                }
            } else {
                if (features[2] <= -4.260863542556763) {
                    if (features[5] <= 2.6872974634170532) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 1; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 93; 
                        classes[2] = 0; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 3; 
                }
            }
        } else {
            classes[0] = 96; 
            classes[1] = 0; 
            classes[2] = 0; 
        }
    
        return findMax(classes);
    };

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 6) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new DecisionTreeClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}
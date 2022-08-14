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
            
        if (features[65] <= 0.0015358448144979775) {
            classes[0] = 0; 
            classes[1] = 0; 
            classes[2] = 42; 
        } else {
            if (features[0] <= -74.87500190734863) {
                if (features[66] <= 0.16236110031604767) {
                    if (features[13] <= 44.5) {
                        if (features[64] <= 0.06825782172381878) {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 1; 
                        }
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 5; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 36; 
                    classes[2] = 0; 
                }
            } else {
                classes[0] = 20; 
                classes[1] = 0; 
                classes[2] = 0; 
            }
        }
    
        return findMax(classes);
    };

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 90) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new DecisionTreeClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}
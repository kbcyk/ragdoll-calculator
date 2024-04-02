var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * START --- Non generated code
 */

function updateMaleGenes() {
    updateGenes('MaleColour', 'MaleDilute', 'MaleBrown')
}

function updateFemaleGenes() {
    var tortieDomElement = document.getElementById('FemaleTortie');
    var tortieLabelDomElement = document.getElementById('TortieLabel');
    // Tortie make no difference if female is red or cream
    if (updateGenes('FemaleColour', 'FemaleDilute', 'FemaleBrown')) {
        tortieDomElement.checked = true;
        tortieDomElement.disabled = true;
        tortieDomElement.style.display = 'none';
        tortieLabelDomElement.innerHTML = "&nbsp;";
    }
    else {
        tortieDomElement.checked = false;
        tortieDomElement.disabled = false;
        tortieDomElement.style.display = 'block';
        tortieLabelDomElement.innerHTML = "Tortie&nbsp;";
    }

}

function updateGenes(colourElement, diluteElement, brownElement) {
    var selectedText = getDropDownSelectedText(colourElement);
    var colour = Predictor.Colour[selectedText];
    var diluteIndexes = Predictor.Colour["_$wrappers"][colour].getDiluteOptions();
    var diluteOptions = diluteIndexes.map(function (o) {
        return Predictor.Carrying["_$wrappers"][o];
    });
    setCarryingSelectOptions(diluteElement, diluteOptions);

    var brownIndexes = Predictor.Colour["_$wrappers"][colour].getBrownOptions();
    var brownOptions = brownIndexes.map(function (o) {
        return Predictor.Carrying["_$wrappers"][o];
    });
    setCarryingSelectOptions(brownElement, brownOptions);
    return colourElement === 'FemaleColour' && (selectedText === 'Red' || selectedText === 'Cream');
}

function updateColourResult() {
    var maleColour = getGeneDropDownSelectedValue('MaleColour');
    var maleDilute = getGeneDropDownSelectedValue('MaleDilute');
    var maleBrown = getGeneDropDownSelectedValue('MaleBrown');
    var femaleColour = getGeneDropDownSelectedValue('FemaleColour');
    var femaleDilute = getGeneDropDownSelectedValue('FemaleDilute');
    var femaleBrown = getGeneDropDownSelectedValue('FemaleBrown');


    // var result = [];
    // for (var val in Predictor.DiluteGene) {
    //     if (!isNaN(val)) {
    //         result.push(parseInt(val, 10));
    //     }
    // }
    // debugArray(result);
    // debugArray([maleColour, maleDilute, maleBrown, femaleColour, femaleDilute, femaleBrown, tortie]);


    var tortie = document.getElementById('FemaleTortie').checked;
    var html = Predictor.predict(maleColour, maleDilute, maleBrown, femaleColour, femaleDilute, femaleBrown, tortie);
    document.getElementById('ColourResult').innerHTML = html;
}

function debugArray(a) {
    var domElement = document.getElementById('DEBUG');
    var range = document.createRange();
    range.selectNodeContents(domElement);
    range.deleteContents();
    var text = 'NumItems = ' + a.length;
    for (var i = 0, len = a.length; i < len; i++) {
        text += 'Item ' + i + ' : ';
        text += a[i] + ' : ';
    }
    domElement.appendChild(document.createTextNode(text));
}


function getGeneDropDownSelectedValue(selectName) {
    var domElement = document.getElementById(selectName);
    if (domElement.length === 0) {
        return 'NotApplicable';
    }
    return domElement.options[domElement.selectedIndex].value;
}

function getDropDownSelectedText(selectName) {
    var domElement = document.getElementById(selectName);
    return domElement.options[domElement.selectedIndex].text;
}


function setCarryingSelectOptions(selectName, options) {
    var domElement = document.getElementById(selectName);

    var currentValue = getGeneDropDownSelectedValue(selectName);

    var range = document.createRange();
    range.selectNodeContents(domElement);
    range.deleteContents();
    if (options.length === 0) {
        domElement.disabled = true;
        return;
    }
    domElement.disabled = false;
    var option = null;
    for (var i = 0, len = options.length; i < len; i++) {
        option = document.createElement("option");
        option.value = options[i].name();
        // always default to the first item
        if (i === 0) {
            option.selected = true;
        }
        else {
            option.selected = option.value === currentValue;
        }
        option.innerHTML = options[i].getOptionText();
        domElement.appendChild(option);
    }
    option = document.createElement("option");
    option.value = "Unknown";
    option.selected = option.value === currentValue;
    option.innerHTML = "Don't know";
    domElement.appendChild(option);
}

/**
 * END --- Non generated code
 */


/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
var Predictor = (function () {
    function Predictor() {
    }
    Predictor.predict = function (maleColour, maleDilute, maleBrown, femaleColour, femaleDilute, femaleBrown, femaleTortie) {
        return Predictor.getHtml(maleColour, maleDilute, maleBrown, femaleColour, femaleDilute, femaleBrown, femaleTortie);
    };
    Predictor.getHtml = function (maleColour, maleDilute, maleBrown, femaleColour, femaleDilute, femaleBrown, femaleTortie) {
        var actualMaleDilute = Predictor.Carrying[maleDilute];
        var actualMaleBrown = Predictor.Carrying[maleBrown];
        var actualFemaleDilute = Predictor.Carrying[femaleDilute];
        var actualFemaleBrown = Predictor.Carrying[femaleBrown];
        var actualMaleColour = Predictor.Colour[maleColour];
        var actualFemaleColour = Predictor.Colour[femaleColour];
        var maleDiluteCombinations = [actualMaleDilute];
        var maleBrownCombinations = [actualMaleBrown];
        var femaleDiluteCombinations = [actualFemaleDilute];
        var femaleBrownCombinations = [actualFemaleBrown];
        if (actualMaleDilute === Predictor.Carrying.Unknown) {
            maleDiluteCombinations = Predictor.Colour["_$wrappers"][actualMaleColour].getDiluteOptions();
        }
        if (actualMaleBrown === Predictor.Carrying.Unknown) {
            maleBrownCombinations = Predictor.Colour["_$wrappers"][actualMaleColour].getBrownOptions();
        }
        if (actualFemaleDilute === Predictor.Carrying.Unknown) {
            femaleDiluteCombinations = Predictor.Colour["_$wrappers"][actualFemaleColour].getDiluteOptions();
        }
        if (actualFemaleBrown === Predictor.Carrying.Unknown) {
            femaleBrownCombinations = Predictor.Colour["_$wrappers"][actualFemaleColour].getBrownOptions();
        }
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat("<table width=\"100%\" cellspacing=\"0\" cellpadding=\"2\">"); return sb; })(sb);
        var _loop_1 = function (index1958) {
            var maleDiluteCombination = maleDiluteCombinations[index1958];
            {
                var _loop_2 = function (index1959) {
                    var maleBrownCombination = maleBrownCombinations[index1959];
                    {
                        var _loop_3 = function (index1960) {
                            var femaleDiluteCombination = femaleDiluteCombinations[index1960];
                            {
                                var _loop_4 = function (index1961) {
                                    var femaleBrownCombination = femaleBrownCombinations[index1961];
                                    {
                                        Predictor.startTableRow(sb);
                                        Predictor.startTableCell(sb, "1", "#eee");
                                        /* append */ (function (sb) { sb.str = sb.str.concat(Predictor.getColourDesc(actualMaleColour, maleDiluteCombination, maleBrownCombination, false)); return sb; })(sb);
                                        Predictor.endTableCell(sb);
                                        Predictor.startTableCell(sb, "1", "#eee");
                                        /* append */ (function (sb) { sb.str = sb.str.concat(Predictor.getColourDesc(actualFemaleColour, femaleDiluteCombination, femaleBrownCombination, femaleTortie)); return sb; })(sb);
                                        Predictor.endTableCell(sb);
                                        Predictor.endTableRow(sb);
                                        var males = ([]);
                                        var females = ([]);
                                        Predictor.addKittensForCombination(maleColour, femaleColour, femaleTortie, maleDiluteCombination, maleBrownCombination, femaleDiluteCombination, femaleBrownCombination, males, females);
                                        var numRows = Math.max(/* size */ males.length, /* size */ females.length);
                                        Predictor.startTableRow(sb);
                                        Predictor.startTableCell(sb, "1", "#eee");
                                        /* append */ (function (sb) { sb.str = sb.str.concat("<h4 class='font-alt'>Male Kittens</h4>"); return sb; })(sb);
                                        Predictor.endTableCell(sb);
                                        Predictor.startTableCell(sb, "1", "#eee");
                                        /* append */ (function (sb) { sb.str = sb.str.concat("<h4 class='font-alt'>Female Kittens</h4>"); return sb; })(sb);
                                        Predictor.endTableCell(sb);
                                        Predictor.endTableRow(sb);
                                        for (var i = 0; i < numRows; ++i) {
                                            Predictor.startTableRow(sb);
                                            Predictor.startTableCell(sb, "1", "#fff");
                                            Predictor.appendKitten(sb, males, i);
                                            Predictor.endTableCell(sb);
                                            Predictor.startTableCell(sb, "1", "#fff");
                                            Predictor.appendKitten(sb, females, i);
                                            Predictor.endTableCell(sb);
                                            Predictor.endTableRow(sb);
                                        }
                                        ;
                                    }
                                };
                                for (var index1961 = 0; index1961 < femaleBrownCombinations.length; index1961++) {
                                    _loop_4(index1961);
                                }
                            }
                        };
                        for (var index1960 = 0; index1960 < femaleDiluteCombinations.length; index1960++) {
                            _loop_3(index1960);
                        }
                    }
                };
                for (var index1959 = 0; index1959 < maleBrownCombinations.length; index1959++) {
                    _loop_2(index1959);
                }
            }
        };
        for (var index1958 = 0; index1958 < maleDiluteCombinations.length; index1958++) {
            _loop_1(index1958);
        }
        return sb.str;
    };
    Predictor.appendKitten = function (sb, kittens, index) {
        if (index >= kittens.length) {
            return;
        }
        /* append */ (function (sb) { sb.str = sb.str.concat("\n"); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(kittens[index]); return sb; })(sb));
    };
    Predictor.startTableRow = function (sb) {
        /* append */ (function (sb) { sb.str = sb.str.concat("<tr bgcolor=\"#0066CC\">\n"); return sb; })(sb);
    };
    Predictor.endTableRow = function (sb) {
        /* append */ (function (sb) { sb.str = sb.str.concat("</tr>\n"); return sb; })(sb);
    };
    Predictor.endTableCell = function (sb) {
        /* append */ (function (sb) { sb.str = sb.str.concat("</font></div></td>\n"); return sb; })(sb);
    };
    Predictor.startTableCell = function (sb, span, colour) {
        /* append */ (function (sb) { sb.str = sb.str.concat("<td width=\"50%\" bordercolor=\"#1963AE\" bgcolor=\"" + colour + "\" " + ((span.length === 0) ? "" : ("colspan=\"" + span + "\"")) + ">"); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat("<div align=\"center\" ><span>"); return sb; })(sb);
    };
    Predictor.getColourDesc = function (colour, dilute, brown, tortie) {
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(Predictor.Colour[colour]); return sb; })(sb);
        if (tortie) {
            /* append */ (function (sb) { sb.str = sb.str.concat(", tortie"); return sb; })(sb);
        }
        if (Predictor.Carrying["_$wrappers"][dilute].isDefined()) {
            /* append */ (function (sb) { sb.str = sb.str.concat(" dilute"); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(Predictor.Carrying["_$wrappers"][dilute].getSummaryText()); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(", "); return sb; })(sb)));
        }
        if (Predictor.Carrying["_$wrappers"][brown].isDefined()) {
            /* append */ (function (sb) { sb.str = sb.str.concat(Predictor.Carrying["_$wrappers"][dilute].isDefined() ? " and " : ", "); return sb; })(sb);
            /* append */ (function (sb) { sb.str = sb.str.concat(" chocolate"); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(Predictor.Carrying["_$wrappers"][brown].getSummaryText()); return sb; })(sb));
        }
        return sb.str;
    };
    Predictor.addKittensForCombination = function (maleColour, femaleColour, femaleTortie, actualMaleDilute, actualMaleBrown, actualFemaleDilute, actualFemaleBrown, males, females) {
        var maleKittens = ([]);
        var femaleKittens = ([]);
        Predictor.getKittens(/* Enum.valueOf */ Predictor.Colour[maleColour], actualMaleDilute, actualMaleBrown, /* Enum.valueOf */ Predictor.Colour[femaleColour], actualFemaleDilute, actualFemaleBrown, femaleTortie, maleKittens, femaleKittens);
        for (var index1962 = 0; index1962 < maleKittens.length; index1962++) {
            var maleKitten = maleKittens[index1962];
            {
                /* add */ (males.push(maleKitten) > 0);
            }
        }
        for (var index1963 = 0; index1963 < femaleKittens.length; index1963++) {
            var femaleKitten = femaleKittens[index1963];
            {
                /* add */ (females.push(femaleKitten) > 0);
            }
        }
    };
    Predictor.getKittens = function (maleColour, maleDilute, maleBrown, femaleColour, femaleDilute, femaleBrown, femaleTortie, maleKittens, femaleKittens) {
        var male = new Predictor.Cat();
        male.setMale(maleColour, maleDilute, maleBrown);
        var female = new Predictor.Cat();
        female.setFemale(femaleColour, femaleTortie, femaleDilute, femaleBrown);
        var males = ([]);
        var females = ([]);
        male.getKittens(female, males, females);
        for (var index1964 = 0; index1964 < males.length; index1964++) {
            var maleKitten = males[index1964];
            {
                /* add */ (maleKittens.push(maleKitten.getDescription()) > 0);
            }
        }
        for (var index1965 = 0; index1965 < females.length; index1965++) {
            var femaleKitten = females[index1965];
            {
                /* add */ (femaleKittens.push(femaleKitten.getDescription()) > 0);
            }
        }
    };
    return Predictor;
}());
Predictor["__class"] = "Predictor";
(function (Predictor) {
    var BrownGene;
    (function (BrownGene) {
        BrownGene[BrownGene["B"] = 0] = "B";
        BrownGene[BrownGene["b"] = 1] = "b";
    })(BrownGene = Predictor.BrownGene || (Predictor.BrownGene = {}));
    var DiluteGene;
    (function (DiluteGene) {
        DiluteGene[DiluteGene["D"] = 0] = "D";
        DiluteGene[DiluteGene["d"] = 1] = "d";
    })(DiluteGene = Predictor.DiluteGene || (Predictor.DiluteGene = {}));
    var GenderGene;
    (function (GenderGene) {
        GenderGene[GenderGene["O"] = 0] = "O";
        GenderGene[GenderGene["X"] = 1] = "X";
        GenderGene[GenderGene["Y"] = 2] = "Y";
    })(GenderGene = Predictor.GenderGene || (Predictor.GenderGene = {}));
    var GeneExpr;
    (function (GeneExpr) {
        GeneExpr[GeneExpr["None"] = 0] = "None";
        GeneExpr[GeneExpr["Homo"] = 1] = "Homo";
        GeneExpr[GeneExpr["Hetero"] = 2] = "Hetero";
    })(GeneExpr = Predictor.GeneExpr || (Predictor.GeneExpr = {}));
    /** @ignore */
    var GeneExpr_$WRAPPER = (function () {
        function GeneExpr_$WRAPPER(_$ordinal, _$name) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
        }
        GeneExpr_$WRAPPER.prototype.compareToGeneExpr = function (o) {
            return this.ordinal() - Predictor.GeneExpr[Predictor.GeneExpr[o]];
        };
        GeneExpr_$WRAPPER.prototype.name = function () { return this._$name; };
        GeneExpr_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return GeneExpr_$WRAPPER;
    }());
    Predictor.GeneExpr_$WRAPPER = GeneExpr_$WRAPPER;
    GeneExpr["__class"] = "Predictor.GeneExpr";
    GeneExpr["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    GeneExpr["_$wrappers"] = [new GeneExpr_$WRAPPER(0, "None"), new GeneExpr_$WRAPPER(1, "Homo"), new GeneExpr_$WRAPPER(2, "Hetero")];
    var GenePair = (function () {
        function GenePair(one, two) {
            this.mOne = null;
            this.mTwo = null;
            this.mOne = one;
            this.mTwo = two;
        }
        GenePair.prototype.getOne = function () {
            return this.mOne;
        };
        GenePair.prototype.getTwo = function () {
            return this.mTwo;
        };
        GenePair.prototype.getExpr = function (first, second) {
            if (this.mOne === this.mTwo) {
                return this.mOne === first ? Predictor.GeneExpr.None : Predictor.GeneExpr.Homo;
            }
            return Predictor.GeneExpr.Hetero;
        };
        /**
         *
         * @param {*} o
         * @return {boolean}
         */
        GenePair.prototype.equals = function (o) {
            if (this === o)
                return true;
            if (o == null || this.constructor !== o.constructor)
                return false;
            var genePair = o;
            if (this.mOne !== genePair.mOne)
                return false;
            if (this.mTwo !== genePair.mTwo)
                return false;
            return true;
        };
        /**
         *
         * @return {number}
         */
        GenePair.prototype.hashCode = function () {
            var result = (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString();
            } })(this.mOne);
            result = 31 * result + (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString();
            } })(this.mTwo);
            return result;
        };
        GenePair.getPair$Predictor_GeneExpr$java_lang_Object$java_lang_Object = function (expr, first, second) {
            if (expr === Predictor.GeneExpr.None) {
                return (new Predictor.GenePair(first, first));
            }
            else if (expr === Predictor.GeneExpr.Hetero) {
                return (new Predictor.GenePair(first, second));
            }
            return (new Predictor.GenePair(second, second));
        };
        GenePair.getPair$Predictor_Carrying$java_lang_Object$java_lang_Object$java_lang_Object$java_lang_Object = function (carrying, first, second, currentFirst, currentSecond) {
            if (carrying === Predictor.Carrying.NotCarrying) {
                return GenePair.getPair(Predictor.GeneExpr.None, currentFirst, currentSecond);
            }
            if (carrying === Predictor.Carrying.Carrying) {
                return GenePair.getPair(Predictor.GeneExpr.Hetero, currentFirst, currentSecond);
            }
            if (carrying === Predictor.Carrying.Homozygous) {
                return GenePair.getPair(Predictor.GeneExpr.Homo, currentFirst, currentSecond);
            }
            return (new Predictor.GenePair(first, second));
        };
        GenePair.getPair = function (carrying, first, second, currentFirst, currentSecond) {
            if (((typeof carrying === 'number') || carrying === null) && ((first != null) || first === null) && ((second != null) || second === null) && ((currentFirst != null) || currentFirst === null) && ((currentSecond != null) || currentSecond === null)) {
                return Predictor.GenePair.getPair$Predictor_Carrying$java_lang_Object$java_lang_Object$java_lang_Object$java_lang_Object(carrying, first, second, currentFirst, currentSecond);
            }
            else if (((typeof carrying === 'number') || carrying === null) && ((first != null) || first === null) && ((second != null) || second === null) && currentFirst === undefined && currentSecond === undefined) {
                return Predictor.GenePair.getPair$Predictor_GeneExpr$java_lang_Object$java_lang_Object(carrying, first, second);
            }
            else
                throw new Error('invalid overload');
        };
        return GenePair;
    }());
    Predictor.GenePair = GenePair;
    GenePair["__class"] = "Predictor.GenePair";
    var Carrying;
    (function (Carrying) {
        Carrying[Carrying["NotApplicable"] = 0] = "NotApplicable";
        Carrying[Carrying["Unknown"] = 1] = "Unknown";
        Carrying[Carrying["NotCarrying"] = 2] = "NotCarrying";
        Carrying[Carrying["Carrying"] = 3] = "Carrying";
        Carrying[Carrying["Homozygous"] = 4] = "Homozygous";
    })(Carrying = Predictor.Carrying || (Predictor.Carrying = {}));
    /** @ignore */
    var Carrying_$WRAPPER = (function () {
        function Carrying_$WRAPPER(_$ordinal, _$name) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
        }
        Carrying_$WRAPPER.prototype.isDefined = function () {
            return true;
        };
        Carrying_$WRAPPER.prototype.name = function () { return this._$name; };
        Carrying_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return Carrying_$WRAPPER;
    }());
    Predictor.Carrying_$WRAPPER = Carrying_$WRAPPER;
    Carrying["__class"] = "Predictor.Carrying";
    Carrying["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    (function (Carrying) {
        /** @ignore */
        var Carrying$0_$WRAPPER = (function (_super) {
            __extends(Carrying$0_$WRAPPER, _super);
            function Carrying$0_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {string}
             */
            Carrying$0_$WRAPPER.prototype.getOptionText = function () {
                return this.toString();
            };
            /**
             *
             * @return {string}
             */
            Carrying$0_$WRAPPER.prototype.getSummaryText = function () {
                return this.toString();
            };
            /**
             *
             * @return {boolean}
             */
            Carrying$0_$WRAPPER.prototype.isDefined = function () {
                return false;
            };
            return Carrying$0_$WRAPPER;
        }(Carrying_$WRAPPER));
        Carrying.Carrying$0_$WRAPPER = Carrying$0_$WRAPPER;
        /** @ignore */
        var Carrying$1_$WRAPPER = (function (_super) {
            __extends(Carrying$1_$WRAPPER, _super);
            function Carrying$1_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {string}
             */
            Carrying$1_$WRAPPER.prototype.getOptionText = function () {
                return "Don\'t know";
            };
            /**
             *
             * @return {string}
             */
            Carrying$1_$WRAPPER.prototype.getSummaryText = function () {
                return "don\'t know";
            };
            /**
             *
             * @return {boolean}
             */
            Carrying$1_$WRAPPER.prototype.isDefined = function () {
                return false;
            };
            return Carrying$1_$WRAPPER;
        }(Carrying_$WRAPPER));
        Carrying.Carrying$1_$WRAPPER = Carrying$1_$WRAPPER;
        /** @ignore */
        var Carrying$2_$WRAPPER = (function (_super) {
            __extends(Carrying$2_$WRAPPER, _super);
            function Carrying$2_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {string}
             */
            Carrying$2_$WRAPPER.prototype.getOptionText = function () {
                return "Not carrying";
            };
            /**
             *
             * @return {string}
             */
            Carrying$2_$WRAPPER.prototype.getSummaryText = function () {
                return "not carrying";
            };
            return Carrying$2_$WRAPPER;
        }(Carrying_$WRAPPER));
        Carrying.Carrying$2_$WRAPPER = Carrying$2_$WRAPPER;
        /** @ignore */
        var Carrying$3_$WRAPPER = (function (_super) {
            __extends(Carrying$3_$WRAPPER, _super);
            function Carrying$3_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {string}
             */
            Carrying$3_$WRAPPER.prototype.getOptionText = function () {
                return "Carrying";
            };
            /**
             *
             * @return {string}
             */
            Carrying$3_$WRAPPER.prototype.getSummaryText = function () {
                return "carrying";
            };
            return Carrying$3_$WRAPPER;
        }(Carrying_$WRAPPER));
        Carrying.Carrying$3_$WRAPPER = Carrying$3_$WRAPPER;
        /** @ignore */
        var Carrying$4_$WRAPPER = (function (_super) {
            __extends(Carrying$4_$WRAPPER, _super);
            function Carrying$4_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {string}
             */
            Carrying$4_$WRAPPER.prototype.getOptionText = function () {
                return "Homozygous";
            };
            /**
             *
             * @return {string}
             */
            Carrying$4_$WRAPPER.prototype.getSummaryText = function () {
                return "homozygous for";
            };
            return Carrying$4_$WRAPPER;
        }(Carrying_$WRAPPER));
        Carrying.Carrying$4_$WRAPPER = Carrying$4_$WRAPPER;
    })(Carrying = Predictor.Carrying || (Predictor.Carrying = {}));
    Carrying["_$wrappers"] = [new Carrying.Carrying$0_$WRAPPER(0, "NotApplicable"), new Carrying.Carrying$1_$WRAPPER(1, "Unknown"), new Carrying.Carrying$2_$WRAPPER(2, "NotCarrying"), new Carrying.Carrying$3_$WRAPPER(3, "Carrying"), new Carrying.Carrying$4_$WRAPPER(4, "Homozygous")];
    var Colour;
    (function (Colour) {
        Colour[Colour["Red"] = 0] = "Red";
        Colour[Colour["Cream"] = 1] = "Cream";
        Colour[Colour["Seal"] = 2] = "Seal";
        Colour[Colour["Chocolate"] = 3] = "Chocolate";
        Colour[Colour["Blue"] = 4] = "Blue";
        Colour[Colour["Lilac"] = 5] = "Lilac";
    })(Colour = Predictor.Colour || (Predictor.Colour = {}));
    /** @ignore */
    var Colour_$WRAPPER = (function () {
        function Colour_$WRAPPER(_$ordinal, _$name) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
        }
        Colour_$WRAPPER.prototype.compareToColour = function (o) {
            return this.ordinal() - Predictor.Colour[Predictor.Colour[o]];
        };
        Colour_$WRAPPER.prototype.name = function () { return this._$name; };
        Colour_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return Colour_$WRAPPER;
    }());
    Predictor.Colour_$WRAPPER = Colour_$WRAPPER;
    Colour["__class"] = "Predictor.Colour";
    Colour["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    (function (Colour) {
        /** @ignore */
        var Colour$0_$WRAPPER = (function (_super) {
            __extends(Colour$0_$WRAPPER, _super);
            function Colour$0_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$0_$WRAPPER.prototype.getDiluteOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying];
            };
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$0_$WRAPPER.prototype.getBrownOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying, Predictor.Carrying.Homozygous];
            };
            return Colour$0_$WRAPPER;
        }(Colour_$WRAPPER));
        Colour.Colour$0_$WRAPPER = Colour$0_$WRAPPER;
        /** @ignore */
        var Colour$1_$WRAPPER = (function (_super) {
            __extends(Colour$1_$WRAPPER, _super);
            function Colour$1_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$1_$WRAPPER.prototype.getDiluteOptions = function () {
                return [];
            };
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$1_$WRAPPER.prototype.getBrownOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying, Predictor.Carrying.Homozygous];
            };
            return Colour$1_$WRAPPER;
        }(Colour_$WRAPPER));
        Colour.Colour$1_$WRAPPER = Colour$1_$WRAPPER;
        /** @ignore */
        var Colour$2_$WRAPPER = (function (_super) {
            __extends(Colour$2_$WRAPPER, _super);
            function Colour$2_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$2_$WRAPPER.prototype.getDiluteOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying];
            };
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$2_$WRAPPER.prototype.getBrownOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying];
            };
            return Colour$2_$WRAPPER;
        }(Colour_$WRAPPER));
        Colour.Colour$2_$WRAPPER = Colour$2_$WRAPPER;
        /** @ignore */
        var Colour$3_$WRAPPER = (function (_super) {
            __extends(Colour$3_$WRAPPER, _super);
            function Colour$3_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$3_$WRAPPER.prototype.getDiluteOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying];
            };
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$3_$WRAPPER.prototype.getBrownOptions = function () {
                return [];
            };
            return Colour$3_$WRAPPER;
        }(Colour_$WRAPPER));
        Colour.Colour$3_$WRAPPER = Colour$3_$WRAPPER;
        /** @ignore */
        var Colour$4_$WRAPPER = (function (_super) {
            __extends(Colour$4_$WRAPPER, _super);
            function Colour$4_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$4_$WRAPPER.prototype.getDiluteOptions = function () {
                return [];
            };
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$4_$WRAPPER.prototype.getBrownOptions = function () {
                return [Predictor.Carrying.NotCarrying, Predictor.Carrying.Carrying];
            };
            return Colour$4_$WRAPPER;
        }(Colour_$WRAPPER));
        Colour.Colour$4_$WRAPPER = Colour$4_$WRAPPER;
        /** @ignore */
        var Colour$5_$WRAPPER = (function (_super) {
            __extends(Colour$5_$WRAPPER, _super);
            function Colour$5_$WRAPPER(_$ordinal, _$name) {
                return _super.call(this, _$ordinal, _$name) || this;
            }
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$5_$WRAPPER.prototype.getDiluteOptions = function () {
                return [];
            };
            /**
             *
             * @return {Predictor.Carrying[]}
             */
            Colour$5_$WRAPPER.prototype.getBrownOptions = function () {
                return [];
            };
            return Colour$5_$WRAPPER;
        }(Colour_$WRAPPER));
        Colour.Colour$5_$WRAPPER = Colour$5_$WRAPPER;
    })(Colour = Predictor.Colour || (Predictor.Colour = {}));
    Colour["_$wrappers"] = [new Colour.Colour$0_$WRAPPER(0, "Red"), new Colour.Colour$1_$WRAPPER(1, "Cream"), new Colour.Colour$2_$WRAPPER(2, "Seal"), new Colour.Colour$3_$WRAPPER(3, "Chocolate"), new Colour.Colour$4_$WRAPPER(4, "Blue"), new Colour.Colour$5_$WRAPPER(5, "Lilac")];
    var Cat = (function () {
        function Cat() {
            this.mGenderOne = null;
            this.mGenderTwo = null;
            this.mDiluteOne = null;
            this.mDiluteTwo = null;
            this.mBrownOne = null;
            this.mBrownTwo = null;
        }
        Cat.FEMALE_OO_$LI$ = function () { if (Cat.FEMALE_OO == null)
            Cat.FEMALE_OO = (new Predictor.GenePair(Predictor.GenderGene.O, Predictor.GenderGene.O)); return Cat.FEMALE_OO; };
        ;
        Cat.FEMALE_XO_$LI$ = function () { if (Cat.FEMALE_XO == null)
            Cat.FEMALE_XO = (new Predictor.GenePair(Predictor.GenderGene.X, Predictor.GenderGene.O)); return Cat.FEMALE_XO; };
        ;
        Cat.FEMALE_XX_$LI$ = function () { if (Cat.FEMALE_XX == null)
            Cat.FEMALE_XX = (new Predictor.GenePair(Predictor.GenderGene.X, Predictor.GenderGene.X)); return Cat.FEMALE_XX; };
        ;
        Cat.MALE_YO_$LI$ = function () { if (Cat.MALE_YO == null)
            Cat.MALE_YO = (new Predictor.GenePair(Predictor.GenderGene.Y, Predictor.GenderGene.O)); return Cat.MALE_YO; };
        ;
        Cat.MALE_YX_$LI$ = function () { if (Cat.MALE_YX == null)
            Cat.MALE_YX = (new Predictor.GenePair(Predictor.GenderGene.Y, Predictor.GenderGene.X)); return Cat.MALE_YX; };
        ;
        Cat.prototype.setGenes$Predictor_GenderGene$Predictor_GenderGene$Predictor_DiluteGene$Predictor_DiluteGene$Predictor_BrownGene$Predictor_BrownGene = function (genderOne, genderTwo, diluteOne, diluteTwo, brownOne, brownTwo) {
            this.mGenderOne = genderOne;
            this.mGenderTwo = genderTwo;
            this.mDiluteOne = diluteOne;
            this.mDiluteTwo = diluteTwo;
            this.mBrownOne = brownOne;
            this.mBrownTwo = brownTwo;
        };
        Cat.prototype.setGenes = function (genderOne, genderTwo, diluteOne, diluteTwo, brownOne, brownTwo) {
            if (((typeof genderOne === 'number') || genderOne === null) && ((typeof genderTwo === 'number') || genderTwo === null) && ((typeof diluteOne === 'number') || diluteOne === null) && ((typeof diluteTwo === 'number') || diluteTwo === null) && ((typeof brownOne === 'number') || brownOne === null) && ((typeof brownTwo === 'number') || brownTwo === null)) {
                return this.setGenes$Predictor_GenderGene$Predictor_GenderGene$Predictor_DiluteGene$Predictor_DiluteGene$Predictor_BrownGene$Predictor_BrownGene(genderOne, genderTwo, diluteOne, diluteTwo, brownOne, brownTwo);
            }
            else if (((genderOne != null && genderOne instanceof Predictor.GenePair) || genderOne === null) && ((genderTwo != null && genderTwo instanceof Predictor.GenePair) || genderTwo === null) && ((diluteOne != null && diluteOne instanceof Predictor.GenePair) || diluteOne === null) && diluteTwo === undefined && brownOne === undefined && brownTwo === undefined) {
                return this.setGenes$Predictor_GenePair$Predictor_GenePair$Predictor_GenePair(genderOne, genderTwo, diluteOne);
            }
            else
                throw new Error('invalid overload');
        };
        Cat.prototype.getGenes = function () {
            var _this = this;
            var sb = { str: "", toString: function () { return this.str; } };
            /* append */ (function (sb) { sb.str = sb.str.concat(_this.mBrownTwo); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(_this.mBrownOne); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(_this.mDiluteTwo); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(_this.mDiluteOne); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(_this.mGenderTwo); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(_this.mGenderOne); return sb; })(sb))))));
            return sb.str;
        };
        Cat.prototype.isMale = function () {
            return this.mGenderOne === Predictor.GenderGene.Y;
        };
        Cat.prototype.getGender = function () {
            return (new Predictor.GenePair(this.mGenderOne, this.mGenderTwo));
        };
        Cat.prototype.getDescription = function () {
            var sb = { str: "", toString: function () { return this.str; } };
            var colour = this.getColour();
            /* append */ (function (sb) { sb.str = sb.str.concat(Predictor.Colour[colour]); return sb; })(sb);
            if (this.isTortie()) {
                /* append */ (function (sb) { sb.str = sb.str.concat(" tortie"); return sb; })(sb);
            }
            var carryingDilute = false;
            if (colour !== Predictor.Colour.Blue && colour !== Predictor.Colour.Cream && this.getDilute() === Predictor.GeneExpr.Hetero) {
                carryingDilute = true;
                /* append */ (function (sb) { sb.str = sb.str.concat(" carrying dilute"); return sb; })(sb);
            }
            if (colour !== Predictor.Colour.Chocolate && this.getBrown() === Predictor.GeneExpr.Hetero) {
                /* append */ (function (sb) { sb.str = sb.str.concat(carryingDilute ? " and chocolate" : " carrying chocolate"); return sb; })(sb);
            }
            if ((colour === Predictor.Colour.Red || colour === Predictor.Colour.Cream) && this.getBrown() === Predictor.GeneExpr.Homo) {
                /* append */ (function (sb) { sb.str = sb.str.concat(" (homozygous for chocolate)"); return sb; })(sb);
            }
            return sb.str;
        };
        Cat.prototype.getColour = function () {
            if ((this.mGenderOne === Predictor.GenderGene.Y || this.mGenderOne === Predictor.GenderGene.O) && this.mGenderTwo === Predictor.GenderGene.O) {
                return this.getRedCreamColour();
            }
            if (this.getDilute() === Predictor.GeneExpr.Homo) {
                if (this.getBrown() === Predictor.GeneExpr.Homo) {
                    return Predictor.Colour.Lilac;
                }
                return Predictor.Colour.Blue;
            }
            if (this.getBrown() === Predictor.GeneExpr.Homo) {
                return Predictor.Colour.Chocolate;
            }
            return Predictor.Colour.Seal;
        };
        Cat.prototype.isTortie = function () {
            return this.mGenderOne === Predictor.GenderGene.X && this.mGenderTwo === Predictor.GenderGene.O;
        };
        Cat.prototype.getRedCreamColour = function () {
            if (this.getDilute() === Predictor.GeneExpr.Homo) {
                return Predictor.Colour.Cream;
            }
            return Predictor.Colour.Red;
        };
        Cat.prototype.getDilute = function () {
            if (this.mDiluteOne === Predictor.DiluteGene.D && this.mDiluteTwo === Predictor.DiluteGene.D) {
                return Predictor.GeneExpr.None;
            }
            else if ((this.mDiluteOne === Predictor.DiluteGene.D && this.mDiluteTwo === Predictor.DiluteGene.d) || (this.mDiluteOne === Predictor.DiluteGene.d && this.mDiluteTwo === Predictor.DiluteGene.D)) {
                return Predictor.GeneExpr.Hetero;
            }
            return Predictor.GeneExpr.Homo;
        };
        Cat.prototype.getBrown = function () {
            if (this.mBrownOne === Predictor.BrownGene.B && this.mBrownTwo === Predictor.BrownGene.B) {
                return Predictor.GeneExpr.None;
            }
            else if ((this.mBrownOne === Predictor.BrownGene.B && this.mBrownTwo === Predictor.BrownGene.b) || (this.mBrownOne === Predictor.BrownGene.b && this.mBrownTwo === Predictor.BrownGene.B)) {
                return Predictor.GeneExpr.Hetero;
            }
            return Predictor.GeneExpr.Homo;
        };
        Cat.prototype.setMale = function (colour, dilute, brown) {
            this.mGenderOne = Predictor.GenderGene.Y;
            if (colour === Predictor.Colour.Red || colour === Predictor.Colour.Cream) {
                this.mGenderTwo = Predictor.GenderGene.O;
            }
            else {
                this.mGenderTwo = Predictor.GenderGene.X;
            }
            this.setDiluteAndBrown(colour, dilute, brown);
        };
        Cat.prototype.setFemale = function (colour, tortie, dilute, brown) {
            if (colour === Predictor.Colour.Red || colour === Predictor.Colour.Cream) {
                this.mGenderOne = Predictor.GenderGene.O;
                this.mGenderTwo = Predictor.GenderGene.O;
            }
            else {
                this.mGenderOne = Predictor.GenderGene.X;
                this.mGenderTwo = tortie ? Predictor.GenderGene.O : Predictor.GenderGene.X;
            }
            this.setDiluteAndBrown(colour, dilute, brown);
        };
        Cat.prototype.setDiluteAndBrown = function (colour, dilute, brown) {
            this.mDiluteOne = Predictor.DiluteGene.D;
            this.mDiluteTwo = Predictor.DiluteGene.D;
            this.mBrownOne = Predictor.BrownGene.B;
            this.mBrownTwo = Predictor.BrownGene.B;
            var diluteSet = false;
            var brownSet = false;
            if (colour === Predictor.Colour.Cream || colour === Predictor.Colour.Blue) {
                this.mDiluteOne = Predictor.DiluteGene.d;
                this.mDiluteTwo = Predictor.DiluteGene.d;
                diluteSet = true;
            }
            else if (colour === Predictor.Colour.Chocolate) {
                this.mBrownOne = Predictor.BrownGene.b;
                this.mBrownTwo = Predictor.BrownGene.b;
                brownSet = true;
            }
            else if (colour === Predictor.Colour.Lilac) {
                this.mDiluteOne = Predictor.DiluteGene.d;
                this.mDiluteTwo = Predictor.DiluteGene.d;
                this.mBrownOne = Predictor.BrownGene.b;
                this.mBrownTwo = Predictor.BrownGene.b;
                diluteSet = true;
                brownSet = true;
            }
            if (!diluteSet) {
                var dilutePair = Predictor.GenePair.getPair(dilute, this.mDiluteOne, this.mDiluteTwo, Predictor.DiluteGene.D, Predictor.DiluteGene.d);
                this.mDiluteOne = dilutePair.getOne();
                this.mDiluteTwo = dilutePair.getTwo();
            }
            if (!brownSet) {
                var brownPair = Predictor.GenePair.getPair(brown, this.mBrownOne, this.mBrownTwo, Predictor.BrownGene.B, Predictor.BrownGene.b);
                this.mBrownOne = brownPair.getOne();
                this.mBrownTwo = brownPair.getTwo();
            }
        };
        Cat.prototype.getKittens = function (female, maleKittens, femaleKittens) {
            if (!(this.isMale() && !female.isMale()))
                throw new Error("Assertion error line 790: assert isMale() && !female.isMale();");
            ;
            var genders = this.getGenderCombinations(female);
            var dilutes = this.getDiluteCombinations(female);
            var browns = this.getBrownCombinations(female);
            for (var index1966 = 0; index1966 < genders.length; index1966++) {
                var gender = genders[index1966];
                {
                    for (var index1967 = 0; index1967 < dilutes.length; index1967++) {
                        var dilute = dilutes[index1967];
                        {
                            for (var index1968 = 0; index1968 < browns.length; index1968++) {
                                var brown = browns[index1968];
                                {
                                    var kitten = new Predictor.Cat();
                                    kitten.setGenes$Predictor_GenePair$Predictor_GenePair$Predictor_GenePair(gender, dilute, brown);
                                    if (kitten.isMale()) {
                                        /* add */ (maleKittens.push(kitten) > 0);
                                    }
                                    else {
                                        /* add */ (femaleKittens.push(kitten) > 0);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /* sort */ (function (l, c) { if (c.compare)
                l.sort(function (e1, e2) { return c.compare(e1, e2); });
            else
                l.sort(c); })(maleKittens, new Cat.Comparator());
            /* sort */ (function (l, c) { if (c.compare)
                l.sort(function (e1, e2) { return c.compare(e1, e2); });
            else
                l.sort(c); })(femaleKittens, new Cat.Comparator());
        };
        Cat.prototype.getColourPatternMatch = function (others) {
            for (var index1969 = 0; index1969 < others.length; index1969++) {
                var other = others[index1969];
                {
                    if (this.hasColourPatternMatch(other)) {
                        return other;
                    }
                }
            }
            return null;
        };
        Cat.prototype.hasColourPatternMatch = function (other) {
            return this.getColour() === other.getColour() && this.isTortie() === other.isTortie() && this.mDiluteOne === other.mDiluteOne && this.mDiluteTwo === other.mDiluteTwo && this.mBrownOne === other.mBrownOne && this.mBrownTwo === other.mBrownTwo;
        };
        Cat.prototype.setGenes$Predictor_GenePair$Predictor_GenePair$Predictor_GenePair = function (gender, dilute, brown) {
            this.setGenes$Predictor_GenderGene$Predictor_GenderGene$Predictor_DiluteGene$Predictor_DiluteGene$Predictor_BrownGene$Predictor_BrownGene(gender.getOne(), gender.getTwo(), dilute.getOne(), dilute.getTwo(), brown.getOne(), brown.getTwo());
        };
        Cat.prototype.getDiluteCombinations = function (other) {
            return this.getCombinations(this.getDilute(), other.getDilute(), Predictor.DiluteGene.D, Predictor.DiluteGene.d);
        };
        Cat.prototype.getBrownCombinations = function (other) {
            return this.getCombinations(this.getBrown(), other.getBrown(), Predictor.BrownGene.B, Predictor.BrownGene.b);
        };
        Cat.prototype.getCombinations = function (thisExpr, otherExpr, first, second) {
            if (thisExpr === Predictor.GeneExpr.None && otherExpr === Predictor.GeneExpr.None) {
                return [Predictor.GenePair.getPair(Predictor.GeneExpr.None, first, second)];
            }
            if (thisExpr === Predictor.GeneExpr.Homo && otherExpr === Predictor.GeneExpr.Homo) {
                return [Predictor.GenePair.getPair(Predictor.GeneExpr.Homo, first, second)];
            }
            if ((thisExpr === Predictor.GeneExpr.None && otherExpr === Predictor.GeneExpr.Homo) || (thisExpr === Predictor.GeneExpr.Homo && otherExpr === Predictor.GeneExpr.None)) {
                return [Predictor.GenePair.getPair(Predictor.GeneExpr.Hetero, first, second)];
            }
            if ((thisExpr === Predictor.GeneExpr.Hetero && otherExpr === Predictor.GeneExpr.None) || (thisExpr === Predictor.GeneExpr.None && otherExpr === Predictor.GeneExpr.Hetero)) {
                return [Predictor.GenePair.getPair(Predictor.GeneExpr.None, first, second), Predictor.GenePair.getPair(Predictor.GeneExpr.Hetero, first, second)];
            }
            if ((thisExpr === Predictor.GeneExpr.Hetero && otherExpr === Predictor.GeneExpr.Homo) || (thisExpr === Predictor.GeneExpr.Homo && otherExpr === Predictor.GeneExpr.Hetero)) {
                return [Predictor.GenePair.getPair(Predictor.GeneExpr.Homo, first, second), Predictor.GenePair.getPair(Predictor.GeneExpr.Hetero, first, second)];
            }
            if ((thisExpr === Predictor.GeneExpr.Hetero && otherExpr === Predictor.GeneExpr.Hetero)) {
                return [Predictor.GenePair.getPair(Predictor.GeneExpr.None, first, second), Predictor.GenePair.getPair(Predictor.GeneExpr.Homo, first, second), Predictor.GenePair.getPair(Predictor.GeneExpr.Hetero, first, second)];
            }
            if (!(false))
                throw new Error("Assertion error line 867: assert false : 'invalid gene combination';");
            ;
            return [];
        };
        Cat.prototype.getGenderCombinations = function (female) {
            if (!(this.isMale() && !female.isMale()))
                throw new Error("Assertion error line 872: assert isMale() && !female.isMale();");
            ;
            if (this.getGender().equals(Cat.MALE_YO_$LI$())) {
                if (female.getGender().equals(Cat.FEMALE_OO_$LI$())) {
                    return [Cat.MALE_YO_$LI$(), Cat.FEMALE_OO_$LI$()];
                }
                if (female.getGender().equals(Cat.FEMALE_XO_$LI$())) {
                    return [Cat.MALE_YX_$LI$(), Cat.FEMALE_XO_$LI$(), Cat.MALE_YO_$LI$(), Cat.FEMALE_OO_$LI$()];
                }
                if (female.getGender().equals(Cat.FEMALE_XX_$LI$())) {
                    return [Cat.MALE_YX_$LI$(), Cat.FEMALE_XO_$LI$()];
                }
            }
            if (this.getGender().equals(Cat.MALE_YX_$LI$())) {
                if (female.getGender().equals(Cat.FEMALE_OO_$LI$())) {
                    return [Cat.MALE_YO_$LI$(), Cat.FEMALE_XO_$LI$()];
                }
                if (female.getGender().equals(Cat.FEMALE_XO_$LI$())) {
                    return [Cat.MALE_YX_$LI$(), Cat.MALE_YO_$LI$(), Cat.FEMALE_XX_$LI$(), Cat.FEMALE_XO_$LI$()];
                }
                if (female.getGender().equals(Cat.FEMALE_XX_$LI$())) {
                    return [Cat.MALE_YX_$LI$(), Cat.FEMALE_XX_$LI$()];
                }
            }
            if (!(false))
                throw new Error("Assertion error line 895: assert false : 'Invalid gender genes';");
            ;
            return [];
        };
        return Cat;
    }());
    Predictor.Cat = Cat;
    Cat["__class"] = "Predictor.Cat";
    (function (Cat) {
        var Comparator = (function () {
            function Comparator() {
            }
            Comparator.prototype.compare = function (o1, o2) {
                var colour1 = o1.getColour();
                var colour2 = o2.getColour();
                var cc = Predictor.Colour["_$wrappers"][colour1].compareToColour(colour2);
                if (cc !== 0) {
                    return cc;
                }
                var dilute1 = o1.getDilute();
                var dilute2 = o2.getDilute();
                var dc = Predictor.GeneExpr["_$wrappers"][dilute1].compareToGeneExpr(dilute2);
                if (dc !== 0) {
                    return dc;
                }
                var brown1 = o1.getBrown();
                var brown2 = o2.getBrown();
                var bc = Predictor.GeneExpr["_$wrappers"][brown1].compareToGeneExpr(brown2);
                if (bc !== 0) {
                    return bc;
                }
                return 0;
            };
            return Comparator;
        }());
        Cat.Comparator = Comparator;
        Comparator["__class"] = "Predictor.Cat.Comparator";
        Comparator["__interfaces"] = ["java.util.Comparator"];
    })(Cat = Predictor.Cat || (Predictor.Cat = {}));
})(Predictor || (Predictor = {}));
Predictor.Cat.MALE_YX_$LI$();
Predictor.Cat.MALE_YO_$LI$();
Predictor.Cat.FEMALE_XX_$LI$();
Predictor.Cat.FEMALE_XO_$LI$();
Predictor.Cat.FEMALE_OO_$LI$();

/*! For license information please see errors.t9n.fr-97a31571-4709d28c.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const i="Une erreur est survenue lors du chargement du diagramme.",s="Ce diagramme comporte ${ elementCount } barres au total. Les diagrammes à barres avec une série sont limités à ${ totalLimit } barres. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",t="Les diagrammes à barres avec deux séries sont limités à ${ totalLimit } barres, ou ${ seriesLimit } barres par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",a="Les diagrammes à barres avec trois séries ou plus sont limités à ${ totalLimit } barres, ou ${ seriesLimit } barres par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",n="Les diagrammes à barres sont limités à ${ seriesLimit } séries. Choisissez un champ de fractionnement avec moins de valeurs uniques",o="Une erreur est survenue lors de la création du diagramme.",r="Impossible d'appliquer une transformation logarithmique à des valeurs négatives ou égales à zéro.",u="Impossible d'appliquer une transformation de racine carrée à des valeurs négatives.",m="Une erreur est survenue lors du chargement de la couche. URL = ${ url }. ID de l'élément du portail = ${ portalItemId }.",l="${ dataPath } doit être unique. La série nommée ${ seriesName } comporte un ID (${ seriesID }) qui est déjà utilisé par une autre série.",d="${ dataPath } ne peut pas réaliser d'agrégation de type autre que Total sur un champ non numérique.",c="Propriété ${ missingProperty } manquante dans ${ dataPath }.",p="${ dataPath } ne doit pas comporter moins de ${ limit } caractères.",L="${ dataPath } ne doit pas comporter moins de ${ limit } éléments.",C="${ dataPath } ne doit pas comporter plus de ${ limit } éléments.",v="${ dataPath } doit contenir au moins un caractère autre qu'un espace.",h="${ dataPath } ne doit pas contenir ${ additionalProperty }.",g="${ dataPath } doit être égal à l'une de ces valeurs autorisées : ${ allowedValues }.",x="${ dataPath } doit correspondre à l'une des structures suivantes : ${ schemaOptions }.",q="Les nuages de points avec des symboles proportionnels ne sont pas pris en charge. La taille de symbole par défaut a été appliquée.",$="Échec de la lecture des données en entrée.",b="Les histogrammes requièrent au moins deux valeurs numériques.",E="Le type de série attendu à l’index ${ seriesIndex } est '${ expectedType }', mais '${ receivedType }' a été reçu à la place",S="Assurez-vous que la somme totale du ou des champs numériques sélectionnés renvoie toutes les valeurs positives ou toutes les valeurs négatives.",f="Ce diagramme comporte ${ sliceCount } secteurs au total. Les diagrammes à secteurs sont limités à ${ totalLimit } secteurs. Choisissez un champ de catégorie avec moins de valeurs uniques, ajoutez moins de champs numériques ou appliquez un filtre à vos données.",y="Les jauges basées sur les entités sont limitées à ${ totalLimit } entités. Filtrez vos données.",z="Ce diagramme contient un total de ${ elementCount } symboles ponctuels. Les diagrammes linéaires avec une seule série sont limités à ${ totalLimit } symboles ponctuels. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",P="Les diagrammes linéaires avec deux séries sont limités à ${ totalLimit } symboles ponctuels, ou ${ seriesLimit } symboles ponctuels par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",I="Les diagrammes linéaires avec trois séries ou plus sont limités à ${ totalLimit } symboles ponctuels, ou ${ seriesLimit } symboles ponctuels par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",B="Les diagrammes linéaires sont limités à ${ seriesLimit } séries. Choisissez un champ de fractionnement avec moins de valeurs uniques",V="Ce diagramme contient un total de ${ elementCount } boîtes. Les boîtes à moustaches avec une seule série sont limitées à ${ totalLimit } boîtes. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",F="Les boîtes à moustaches avec deux séries sont limitées à ${ totalLimit } boîtes, ou ${ seriesLimit } boîtes par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",w="Les boîtes à moustaches avec trois séries ou plus sont limitées à ${ totalLimit } boîtes, ou ${ seriesLimit } boîtes par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",D="Les boîtes à moustaches sont limitées à ${ seriesLimit } séries. Choisissez un champ de fractionnement avec moins de valeurs uniques",T="Les boîtes à moustaches ne peuvent afficher que ${ totalLimit } points aberrants. Filtrez vos données.";var O={defaultError:i,uniqueSeriesBarCountCannotExceedLimit:s,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:a,barSeriesCountCannotExceedLimit:n,defaultInvalidChart:o,negativeValueInDataForLogTransformation:r,negativeValueInDataForSqrtTransformation:u,layerLoadFailure:m,duplicateSeriesID:l,nonNumericAggregation:d,requiredProperty:c,minLength:p,minItems:L,maxItems:C,whiteSpacePattern:v,additionalProperty:h,enumValues:g,anyOfValues:x,bubbleChartValidateMsg:q,queryError:$,histogramEmptyField:b,invalidSeriesType:E,or:"ou",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:S,pieChartSlicesCannotExceedLimit:f,gaugeCannotExceedLimit:y,uniqueSeriesLineCountCannotExceedLimit:z,twoSeriesLineCountCannotExceedLimit:P,threePlusSeriesLineCountCannotExceedLimit:I,lineSeriesCountCannotExceedLimit:B,uniqueSeriesBoxCountCannotExceedLimit:V,twoSeriesBoxCountCannotExceedLimit:F,threePlusBoxLineCountCannotExceedLimit:w,boxSeriesCountCannotExceedLimit:D,boxSeriesOutlierCannotExceedLimit:T};e.additionalProperty=h,e.anyOfValues=x,e.barSeriesCountCannotExceedLimit=n,e.boxSeriesCountCannotExceedLimit=D,e.boxSeriesOutlierCannotExceedLimit=T,e.bubbleChartValidateMsg=q,e.default=O,e.defaultError=i,e.defaultInvalidChart=o,e.duplicateSeriesID=l,e.enumValues=g,e.gaugeCannotExceedLimit=y,e.histogramEmptyField=b,e.invalidSeriesType=E,e.layerLoadFailure=m,e.lineSeriesCountCannotExceedLimit=B,e.maxItems=C,e.minItems=L,e.minLength=p,e.negativeValueInDataForLogTransformation=r,e.negativeValueInDataForSqrtTransformation=u,e.nonNumericAggregation=d,e.or="ou",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=S,e.pieChartSlicesCannotExceedLimit=f,e.queryError=$,e.requiredProperty=c,e.threePlusBoxLineCountCannotExceedLimit=w,e.threePlusSeriesBarCountCannotExceedLimit=a,e.threePlusSeriesLineCountCannotExceedLimit=I,e.twoSeriesBarCountCannotExceedLimit=t,e.twoSeriesBoxCountCannotExceedLimit=F,e.twoSeriesLineCountCannotExceedLimit=P,e.uniqueSeriesBarCountCannotExceedLimit=s,e.uniqueSeriesBoxCountCannotExceedLimit=V,e.uniqueSeriesLineCountCannotExceedLimit=z,e.whiteSpacePattern=v}));
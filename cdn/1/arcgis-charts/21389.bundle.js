/*! For license information please see 21389.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[21389],{21389:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>P,anyOfValues:()=>x,bubbleChartValidateMsg:()=>y,default:()=>q,defaultError:()=>i,defaultInvalidChart:()=>s,duplicateSeriesID:()=>u,enumValues:()=>g,gaugeCannotExceedLimit:()=>b,histogramEmptyField:()=>S,invalidSeriesType:()=>I,layerLoadFailure:()=>d,lineChartMarkersCannotExceedLimit:()=>k,lineChartSeriesAndMarkersCannotExceedLimit:()=>D,maxItems:()=>c,minItems:()=>h,minLength:()=>L,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>m,nonNumericAggregation:()=>$,or:()=>f,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>v,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>E,requiredProperty:()=>C,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="載入圖表時出錯。",r="此圖表總計有 ${ elementCount } 軸。 含有一個數列的長條圖限於 ${ totalLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",n="含有兩個數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",o="含有三個或更多數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",s="建立圖表時發生錯誤。",l="無法將對數轉換套用於負值或零值。",m="無法將平方根轉換套用於負值。",d="載入圖層時出錯。 URL = ${ url }。 入口網站項目 ID = ${ portalItemId }。",u="${ dataPath } 必須唯一。 名為 ${ seriesName } 的數列具有其他數列已在使用的 ID (${ seriesID })。",$="${ dataPath } 無法在非數值欄位上執行非計數匯聚。",C="${ dataPath } 缺少名為 ${ missingProperty } 的屬性。",L="${ dataPath } 不應短於 ${ limit } 個字元。",h="${ dataPath } 的項目數不應少於 ${ limit } 個。",c="${ dataPath } 的項目數不應多於 ${ limit } 個。",p="${ dataPath } 至少必須有一個非空白字元。",P="${ dataPath } 不能有 ${ additionalProperty }。",g="${ dataPath } 必須等於下列其中一個允許值: ${ allowedValues }。",x="${ dataPath } 必須符合下列其中一項結構描述: ${ schemaOptions }。",y="不支援包含比例符號的散點圖。 已套用預設符號大小。",E="無法讀取輸入資料。",S="直方圖至少需要兩個數值。",I="索引 ${ seriesIndex } 上預期的數列類型為 '${ expectedType }'，但改為接收 '${ receivedType }'",f="或",v="確保所選數值欄位的總和全部傳回正值或全部傳回負值。",V="此圖表總計有 ${ sliceCount } 個切片。 圓餅圖限制為 ${ totalLimit } 個切片。 選擇具有較少唯一值的「類別」欄位、新增較少的「數值」欄位，或將篩選器套用至您的資料。",b="圖徵型儀錶限於 ${ totalLimit } 個圖徵。 篩選您的資料。",D="此圖表總計有 ${ seriesCount } 個數列和 ${ elementCount } 個資料點。 折線圖限於 ${ seriesLimit } 個數列和 ${ totalLimit } 個資料點。 減少數列數量和/或重新匯聚或篩選您的資料。",k="折線圖限於 ${ totalLimit } 個資料點。 篩選或重新匯聚您的資料並再試一次。",q={defaultError:"載入圖表時出錯。",uniqueSeriesBarCountCannotExceedLimit:"此圖表總計有 ${ elementCount } 軸。 含有一個數列的長條圖限於 ${ totalLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",twoSeriesBarCountCannotExceedLimit:"含有兩個數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",threePlusSeriesBarCountCannotExceedLimit:"含有三個或更多數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",defaultInvalidChart:"建立圖表時發生錯誤。",negativeValueInDataForLogTransformation:"無法將對數轉換套用於負值或零值。",negativeValueInDataForSqrtTransformation:"無法將平方根轉換套用於負值。",layerLoadFailure:d,duplicateSeriesID:u,nonNumericAggregation:"${ dataPath } 無法在非數值欄位上執行非計數匯聚。",requiredProperty:"${ dataPath } 缺少名為 ${ missingProperty } 的屬性。",minLength:L,minItems:h,maxItems:c,whiteSpacePattern:"${ dataPath } 至少必須有一個非空白字元。",additionalProperty:"${ dataPath } 不能有 ${ additionalProperty }。",enumValues:g,anyOfValues:x,bubbleChartValidateMsg:"不支援包含比例符號的散點圖。 已套用預設符號大小。",queryError:"無法讀取輸入資料。",histogramEmptyField:"直方圖至少需要兩個數值。",invalidSeriesType:I,or:"或",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"確保所選數值欄位的總和全部傳回正值或全部傳回負值。",pieChartSlicesCannotExceedLimit:V,gaugeCannotExceedLimit:"圖徵型儀錶限於 ${ totalLimit } 個圖徵。 篩選您的資料。",lineChartSeriesAndMarkersCannotExceedLimit:"此圖表總計有 ${ seriesCount } 個數列和 ${ elementCount } 個資料點。 折線圖限於 ${ seriesLimit } 個數列和 ${ totalLimit } 個資料點。 減少數列數量和/或重新匯聚或篩選您的資料。",lineChartMarkersCannotExceedLimit:"折線圖限於 ${ totalLimit } 個資料點。 篩選或重新匯聚您的資料並再試一次。"}}}]);
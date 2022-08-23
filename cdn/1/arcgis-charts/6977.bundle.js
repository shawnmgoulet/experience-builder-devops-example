"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6977],{6977:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>P,anyOfValues:()=>x,bubbleChartValidateMsg:()=>S,default:()=>k,defaultError:()=>i,defaultInvalidChart:()=>s,duplicateSeriesID:()=>u,enumValues:()=>g,histogramEmptyField:()=>E,invalidSeriesType:()=>I,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>D,lineChartSeriesAndMarkersCannotExceedLimit:()=>b,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>$,or:()=>v,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>f,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>y,requiredProperty:()=>C,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="차트를 불러오는 동안 오류가 발생했습니다.",r="해당 차트에는 총 ${ elementCount }개의 막대가 있습니다. 1개의 시리즈가 있는 막대형 차트가 ${ totalLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.",n="2개의 계열이 있는 막대형 차트가 ${ totalLimit }개의 막대 또는 계열당 ${ seriesLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.",o="3개 이상의 계열이 있는 막대형 차트가 ${ totalLimit }개의 막대 또는 계열당 ${ seriesLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.",s="차트를 생성하는 동안 오류가 발생했습니다.",l="로그 변환을 음수 값 또는 0 값에 적용할 수 없습니다.",d="제곱근 변환을 음수 값에 적용할 수 없습니다.",m="레이어를 불러오는 동안 오류가 발생했습니다. URL = ${ url }. 포털 항목 ID = ${ portalItemId }.",u="${ dataPath }은(는) 고유해야 합니다. ${ seriesName }(이)라는 계열에 다른 계열에서 이미 사용된 ID(${ seriesID })가 있습니다.",$="${ dataPath }은(는) 숫자가 아닌 필드에서 불가산 집계를 수행할 수 없습니다.",C="${ dataPath }에 ${ missingProperty } 등록정보가 누락되었습니다.",h="${ dataPath }은(는) ${ limit }자보다 짧으면 안 됩니다.",c="${ dataPath }에는 ${ limit }개 이상의 항목이 있어야 합니다.",L="${ dataPath }에는 ${ limit }개 이하의 항목이 있어야 합니다.",p="${ dataPath }은(는) 공백 이외의 문자를 1개 이상 포함해야 합니다.",P="${ dataPath }에는 ${ additionalProperty }이(가) 없어야 합니다.",g="${ dataPath }은(는) 허용된 값(${ allowedValues }) 중 하나와 같아야 합니다.",x="${ dataPath }은(는) ${ schemaOptions } 중 하나의 스키마와 일치해야 합니다.",S="비례 심볼이 있는 산점도는 지원되지 않습니다. 기본 심볼 크기가 적용되었습니다.",y="입력 데이터를 읽지 못했습니다.",E="히스토그램에는 2개 이상의 숫자 값이 있어야 합니다.",I="인덱스 ${ seriesIndex }에 예상되는 시리즈 유형은 '${ expectedType }'인데 '${ receivedType }'이(가) 대신 수신되었습니다.",v="또는",f="선택한 숫자 필드의 합계가 모든 양수 값 또는 모든 음수 값을 반환하는지 확인합니다.",V="해당 차트에는 총 ${ sliceCount }개의 슬라이스가 있습니다. 파이 차트의 슬라이스는 ${ totalLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 숫자 필드를 더 적게 추가하거나 데이터에 필터를 적용합니다.",b="이 차트에는 총 ${ seriesCount }개의 시리즈와 데이터 포인트 ${ elementCount }개가 있습니다. 선형 차트는 시리즈 ${ seriesLimit }개와 데이터 포인트 ${ totalLimit }개로 제한됩니다. 시리즈 수를 줄이거나 데이터를 다시 집계하거나 필터링합니다.",D="선형 차트는 데이터 포인트 ${ totalLimit }개로 제한됩니다. 데이터를 필터링하거나 재집계하고 다시 시도합니다.";var k={defaultError:"차트를 불러오는 동안 오류가 발생했습니다.",uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:"3개 이상의 계열이 있는 막대형 차트가 ${ totalLimit }개의 막대 또는 계열당 ${ seriesLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.",defaultInvalidChart:"차트를 생성하는 동안 오류가 발생했습니다.",negativeValueInDataForLogTransformation:"로그 변환을 음수 값 또는 0 값에 적용할 수 없습니다.",negativeValueInDataForSqrtTransformation:"제곱근 변환을 음수 값에 적용할 수 없습니다.",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:"${ dataPath }은(는) 숫자가 아닌 필드에서 불가산 집계를 수행할 수 없습니다.",requiredProperty:C,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:"${ dataPath }은(는) 공백 이외의 문자를 1개 이상 포함해야 합니다.",additionalProperty:"${ dataPath }에는 ${ additionalProperty }이(가) 없어야 합니다.",enumValues:g,anyOfValues:x,bubbleChartValidateMsg:"비례 심볼이 있는 산점도는 지원되지 않습니다. 기본 심볼 크기가 적용되었습니다.",queryError:"입력 데이터를 읽지 못했습니다.",histogramEmptyField:"히스토그램에는 2개 이상의 숫자 값이 있어야 합니다.",invalidSeriesType:I,or:"또는",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"선택한 숫자 필드의 합계가 모든 양수 값 또는 모든 음수 값을 반환하는지 확인합니다.",pieChartSlicesCannotExceedLimit:V,lineChartSeriesAndMarkersCannotExceedLimit:b,lineChartMarkersCannotExceedLimit:"선형 차트는 데이터 포인트 ${ totalLimit }개로 제한됩니다. 데이터를 필터링하거나 재집계하고 다시 시도합니다."}}}]);
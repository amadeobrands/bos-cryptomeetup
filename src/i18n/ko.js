/* eslint-disable */
// const ABOUT_CONTENT = require('raw-loader!./about_zh.html');
import ABOUT_CONTENT from './about_ko.html';

export default {
  switch_lang: '스위치 언어',
  globe: '지구',
  map: '지도',
  token_view: '패스 카드',
  about_view: '정보',
  login: '로그인',
  logout: '로그 아웃',
  back: '뒤로',
  filter_country_or_region: '국가 또는 지역 선택',
  my_EOS: '내 BOS',
  my_CMU: '내 CMU',
  my_staked: '내 모기지',
  my_refund: 'My Refund',
  total_staked: '총 모기지',
  my_dividend: '나의 배당금',
  total_dividend: '총 배당금',
  contract_supply: '계약 유통',
  contract_balance: '계약 준비금',
  contract_price: '계약 통화 가격',

  payout_pool_tab: '빨간색 풀',
  my_assets_tab: '내 저작물',
  stake_tab: '모기지',
  bancor_trade_tab: 'Bancor 트랜잭션',

  stake_btn: '모기지',
  unstake_btn: '구독 취소',
  refund_btn: 'Refund',
  buy_btn: '구매',
  sell_btn: '판매',
  claim_btn: '배당금 수령',

  last_buyer: '마지막 구매자',
  count_down: '남은 시간',
  prize_pool: '상금 풀',
  ABOUT_CONTENT,

  cmu_creator: 'Cryptomeetup 팀에 의해 생성되었습니다',
  powered_by: '에 의해 제공',

  // 一些其他的翻译
  stake_number_alert: '얼마나 많은 CMU를 처분할까요?',
  stake_successful_alert: 'CMU 토큰 스테이크 성공',
  stake_pay_attention_alert: '나중에 내 Staked 변경 사항에주의하십시오.',
  stake_confirmed_btn: '확인 됨',
  unstake_alert: '스테이크 취소는 모든 스테이크 CMU를 취소합니다.',
  unstake_success: '성공적인 추출',
  claim_success: '청구 배당 성공',
  wait_alert: '참을성있게 기다려주세요.',
  claim_fail: '추출에 실패했습니다',
  buy_cmu_alert: '얼마나 많은 BOS에 해당하는 CMU를 구매 하시겠습니까?',
  buy_cmu_success_alert: 'CMU 토큰 구매 성공',
  after_buy_cmu_alert: '나중에 CMU 잔액 변경 사항에주의하십시오.',
  sell_cmu_alert: '나중에 CMU 잔액 변경 사항에주의하십시오.',
  ok: '승인',
  sell_cmu_success_alert: 'CMU 가 성공적으로 판매되었습니다.',
  after_sell_cmu_alert: '나중에 BOS 잔액 변화에주의하십시오.',
  scatter_login_fail: '로그인하지 못했습니다. 스 캐터 사용자가 스 캐터가 잠겨 있습니다. 계속 알림을 받고 계속하기 전에 잠금을 해제해야합니다.',
  scatter_login_success: '성공적인 분산 로그인',

  buy_land_withApp_success: '이전이 성공적으로 완료되고 새 집주인인지 확인하기 위해 30 초 이내에 데이터가 자동으로 새로 고쳐집니다. 모든 거래는 블록 체인의 거래 기록의 대상이되며, 토지 구입이 실패하면 환불됩니다.',
  buy_land_success_alert: '토지 성공 구입',
  buy_land_success_msg: '전송이 블록 체인에 제출되었으며 30 초 후에 데이터가 자동으로 새로 고쳐서 구매가 성공적으로 완료되었는지 확인합니다.',
  buy_land_success_comfm: '시원한!',  

  token_FTextBubble:'배당금이 0보다 큰 경우 배당을 청구 할 수 있습니다.',
  app_FTextBubble:'BOS로 CMU 교환',

  input_title: '장소 표시 이름을 입력하십시오',
  input_description: '장소 표시에 대한 설명을 입력하십시오',
  input_nickname: '닉네임',
  upload_photo: '랜드 마크 이미지 업로드',
  confirm_update: '확인',
  update_btn: 'Update',

  state_review: '심사중',
  state_owned: '이미 소유하다',
  state_unopened: '무령주',
  state_occupied: '점령하다',
  invite: '초대장',

  create_portal: '지표 만들기', 
  create_portal_btn: '지표 만들기',
  server_error_alert: '서버 다운로드',
  fill_information_alert: '전체 표시 정보',
  update_prefix: '갱신',
  create_prefix: '생성',
  landmark_success_suffix: '지표가 성공하다',

  vote_btn: '투표',
  current_vote: '현재 투표',
  vote_address: '투표소 주소',

  open_thermodynamic_chart: '열도를 열다',
  close_thermodynamic_chart: '열도 닫기',

  buy_portal: '지표를 구입하다.',
  buy_portal_error: '스마트 계약 찾을 수 없음',
  buy_portal_success: '지표 구매가 성공하다',

  my_portal_nav: '나의 지표',
  my_portal_title: '내가 가진 지표',
  my_portal_no_time: '없다',
  my_portal_name: '명칭.',
  my_portal_des: '상세한 상황',
  my_portal_price: '가격.',

  // 以下修改确认，确认后请删除这条注释
  portal_income: '부동산 수입',
  share_income: '추천 수입',
  create_portal_income: '수입을 창건하다.',
  jackpot_income: '상장 수입',

  my_portal_creator: '공지 창건자',
  my_portal_owner: '지표 소유자',

  countryName: '스폰서{countryName}',
  newCountryName: '새로운 {countryName} 스폰서가 되시면 {price}를 (를) 지불해야합니다.',
  countryNameScatter: 'Scatter 데스크탑 버전으로 지불',
  scatterDesktop: 'Scatter Desktop은보다 편리하고 안전하게 결제 할 수 있습니다',
  noScatter: 'Scatter 데스크탑을 감지 할 수 없음',
  wnlockScatter: 'Scatter 데스크탑 버전으로 결제하려면이 페이지를 열고이 페이지를 새로 고침하십시오.',
  useScatter: '아직 보지 않았다면 다음을 참조하십시오 :[How to use Scatter](https://support.newdex.io/hc/en-us/articles/360016322611-How-to-Use-Scatter-Desktop)',
  loginScatter: 'Scatter로 계속 로그인하십시오.',
  scatterPay: 'Scatter로 지불',
  scatterAppPay: '지갑 앱으로 결제',
  supportPay: '우리는 [Math Wallet](http://www.mathwallet.org/en/), [Token Pocket](https://www.mytokenpocket.vip/en/)및 [MEET.ONE](http://Meet.one/)을 지원합니다. 스캔 코드 지불 :',
  appPay: '앱 지불',
  loginPay: '계속하려면 로그인하십시오.',
  appPayOk: '나는 지갑 응용 프로그램을 사용하여 지불을 완료했습니다.',
  payClose: '닫기',
  loginSuccess: '로그인 성공',
  copy: '복사',
  sponsor: '스폰서',
  yuoBuy: '당신은 @를 구입 한 국가 {owner}',
  priceNum: '{price}를 새로운 스폰서로 지불하십시오.',
  countryNameActivity: '{countryName} 활동',
  noActivity: '활동 없음',
  checkIn: '로그인',
  inviteFriends: '파트너를 초대하여 보상 받기'
};
import constants from "@/common/constants";
import { CallBackStatusEnum } from "@/modules/Onboarding/enums/components.enum";
import type { CallBackStatus } from "@/modules/Onboarding/types/components";

export async function getCallBackStatus(id_subscription: string): Promise<CallBackStatus[]> {
  const api_url = `${constants.CALL_BACK_API_URL}&id_souscription=${id_subscription}`;
  let callBackStatus: CallBackStatus[] = [];

  try {
    const response = await fetch(api_url);

    if (response.ok) {
      let apiStatus: { [key: string]: CallBackStatus } = await response.json();
      Object.keys(apiStatus).forEach((key) => callBackStatus.push(apiStatus[key]));
    }
  } catch (error) {
    console.error(`Can't fetch datas from ${api_url}`, error);
  }

  return callBackStatus;
}

export function getCallBackCardVisibility(callBackStatus: CallBackStatus[]): boolean {
  return !callBackStatus.some(
    (elem) =>
      elem.Call_status === CallBackStatusEnum.CONTACTED_SUCCESSFULLY_CLOSED ||
      elem.Call_status === CallBackStatusEnum.PERMANENTLY_UNREACHABLE,
  );
}

export function getCallBackButtonDisabled(callBackStatus: CallBackStatus[]): boolean {
  return callBackStatus.some(
    (elem) =>
      elem.Call_status === CallBackStatusEnum.CONTACT_IN_PROGRESS ||
      elem.Call_status.includes(CallBackStatusEnum.STILL_UNREACHABLE) ||
      elem.Call_status === CallBackStatusEnum.CONTACTED_SUCCESSFULLY_STILL_OPENED,
  );
}

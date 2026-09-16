"use client";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

type ConsentChoice = "granted" | "denied";
declare global { interface Window { gtag?: (...args: unknown[]) => void; } }
const consentKey = "archangel_consent_v1";
const consentEvent = "archangel-consent-change";
let memoryChoice: ConsentChoice | null = null;
function snapshot(): ConsentChoice | "unset" {
 try { const value = window.localStorage.getItem(consentKey); return value === "granted" || value === "denied" ? value : memoryChoice || "unset"; }
 catch { return memoryChoice || "unset"; }
}
function serverSnapshot(){ return "pending" as const; }
function subscribe(callback:()=>void){window.addEventListener('storage',callback);window.addEventListener(consentEvent,callback);return()=>{window.removeEventListener('storage',callback);window.removeEventListener(consentEvent,callback);};}
function updateConsent(choice:ConsentChoice){window.gtag?.("consent","update",{ad_storage:choice,analytics_storage:choice,ad_user_data:choice,ad_personalization:choice});window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"consent_updated",consent_choice:choice});}
export function ConsentBanner(){
 const choice = useSyncExternalStore(subscribe,snapshot,serverSnapshot);
 useEffect(()=>{if(choice==='granted'||choice==='denied')updateConsent(choice);},[choice]);
 function choose(value:ConsentChoice){memoryChoice=value;try{window.localStorage.setItem(consentKey,value);}catch{/* Consent still applies for this page session. */}window.dispatchEvent(new Event(consentEvent));}
 if(choice!=="unset")return null;
 return <section className="consent-banner" aria-label="Privacy preferences"><p>Allow optional analytics and advertising measurement? Read our <Link href="/privacy">privacy notice</Link>.</p><div><button type="button" className="button-secondary" onClick={()=>choose('denied')}>Decline</button><button type="button" className="button-primary" onClick={()=>choose('granted')}>Allow</button></div></section>;
}

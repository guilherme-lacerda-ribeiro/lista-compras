export function getDataFormatada() {
    let agora = new Date();
    let agoraDiaDaSemana = agora.toLocaleDateString("pt-BR", { weekday: "long" });
    let agoraData = agora.toLocaleDateString("pt-BR");
    let agoraHora = agora.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric", hour12: false });
    return `${agoraDiaDaSemana} (${agoraData}) às ${agoraHora}`;
}

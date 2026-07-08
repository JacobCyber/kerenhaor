import ImageWoman1 from "@/assets/images/woman-1.jpg";
import ImageMan1 from "@/assets/images/man-1.jpg";
import ImageWoman2 from "@/assets/images/woman-2.jpg";
import ImageMan2 from "@/assets/images/man-2.jpg";
import ImageWoman3 from "@/assets/images/woman-3.jpg";
import ImageMan3 from "@/assets/images/man-3.jpg";
import type { Locale } from "@/i18n";
import { t } from "@/i18n";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    email: string;
    initials: string;
    color: string;
    image: any;
}

const baseMembers = [
    {
        id: 1,
        email: "rachel@kerenhaohr.org",
        initials: "RC",
        color: "bg-brand-blue",
        image: ImageWoman1,
        nameKey: "team.member1Name",
        roleKey: "team.member1Role",
        bioKey: "team.member1Bio",
    },
    {
        id: 2,
        email: "avraham@kerenhaohr.org",
        initials: "AL",
        color: "bg-brand-green",
        image: ImageMan1,
        nameKey: "team.member2Name",
        roleKey: "team.member2Role",
        bioKey: "team.member2Bio",
    },
    {
        id: 3,
        email: "maya@kerenhaohr.org",
        initials: "MS",
        color: "bg-brand-red",
        image: ImageWoman2,
        nameKey: "team.member3Name",
        roleKey: "team.member3Role",
        bioKey: "team.member3Bio",
    },
    {
        id: 4,
        email: "yossi@kerenhaohr.org",
        initials: "YK",
        color: "bg-brand-yellow",
        image: ImageMan2,
        nameKey: "team.member4Name",
        roleKey: "team.member4Role",
        bioKey: "team.member4Bio",
    },
    {
        id: 5,
        email: "tamar@kerenhaohr.org",
        initials: "TB",
        color: "bg-brand-blue",
        image: ImageWoman3,
        nameKey: "team.member5Name",
        roleKey: "team.member5Role",
        bioKey: "team.member5Bio",
    },
    {
        id: 6,
        email: "eli@kerenhaohr.org",
        initials: "EM",
        color: "bg-brand-green",
        image: ImageMan3,
        nameKey: "team.member6Name",
        roleKey: "team.member6Role",
        bioKey: "team.member6Bio",
    },
];

export function getTeam(locale: Locale): TeamMember[] {
    return baseMembers.map((m) => ({
        ...m,
        name: t(locale, m.nameKey),
        role: t(locale, m.roleKey),
        bio: t(locale, m.bioKey),
    }));
}

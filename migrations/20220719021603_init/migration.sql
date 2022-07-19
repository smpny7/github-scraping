-- CreateTable
CREATE TABLE `User` (
    `login` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL,
    `node_id` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NOT NULL,
    `gravatar_id` VARCHAR(191) NULL,
    `url` VARCHAR(191) NOT NULL,
    `html_url` VARCHAR(191) NOT NULL,
    `followers_url` VARCHAR(191) NOT NULL,
    `following_url` VARCHAR(191) NOT NULL,
    `gists_url` VARCHAR(191) NOT NULL,
    `starred_url` VARCHAR(191) NOT NULL,
    `subscriptions_url` VARCHAR(191) NOT NULL,
    `organizations_url` VARCHAR(191) NOT NULL,
    `repos_url` VARCHAR(191) NOT NULL,
    `events_url` VARCHAR(191) NOT NULL,
    `received_events_url` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `site_admin` BOOLEAN NOT NULL,
    `name` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `blog` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `hireable` BOOLEAN NULL,
    `bio` VARCHAR(191) NULL,
    `twitter_username` VARCHAR(191) NULL,
    `public_repos` INTEGER NOT NULL,
    `public_gists` INTEGER NOT NULL,
    `followers` INTEGER NOT NULL,
    `following` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `private_gists` INTEGER NOT NULL,
    `total_private_repos` INTEGER NOT NULL,
    `owned_private_repos` INTEGER NOT NULL,
    `disk_usage` INTEGER NOT NULL,
    `collaborators` INTEGER NOT NULL,
    `two_factor_authentication` BOOLEAN NOT NULL,
    `suspended_at` VARCHAR(191) NULL,
    `business_plus` BOOLEAN NOT NULL,
    `ldap_dn` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `collaborators` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `space` INTEGER NOT NULL,
    `private_repos` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `Plan_user_id_key`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Plan` ADD CONSTRAINT `Plan_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
